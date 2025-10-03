-- Create quotes table for storing rental inquiries
CREATE TABLE IF NOT EXISTS quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  car_name VARCHAR(100) NOT NULL,
  region VARCHAR(100) NOT NULL,
  privacy_agree BOOLEAN NOT NULL DEFAULT false,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for faster queries
CREATE INDEX idx_quotes_created_at ON quotes(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX idx_quotes_status ON quotes(status);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_quotes_updated_at
BEFORE UPDATE ON quotes
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert quotes (including anonymous users)
CREATE POLICY "Enable insert for all users" ON quotes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy to allow authenticated users to view all quotes
CREATE POLICY "Enable read access for authenticated users" ON quotes
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Allow anonymous users to view their own quotes (if needed)
CREATE POLICY "Enable read own quotes for anon" ON quotes
  FOR SELECT
  TO anon
  USING (false);  -- Set to false to prevent anon users from reading