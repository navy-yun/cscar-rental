export interface Quote {
  id?: string;
  name: string;
  phone: string;
  car_name: string;
  region: string;
  privacy_agree: boolean;
  status?: 'pending' | 'contacted' | 'completed';
  created_at?: string;
  updated_at?: string;
}

export interface Database {
  public: {
    Tables: {
      quotes: {
        Row: Quote;
        Insert: Omit<Quote, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Quote>;
      };
    };
  };
}