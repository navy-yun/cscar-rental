import { createClient } from '@supabase/supabase-js';
import { Database } from './types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Please check your .env.local file.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Helper function to submit a quote
export async function submitQuote(quoteData: {
  name: string;
  phone: string;
  car_name: string;
  region: string;
  privacy_agree: boolean;
}) {
  try {
    const { data, error } = await supabase
      .from('quotes')
      // @ts-expect-error Supabase type inference issue
      .insert([{
        ...quoteData,
        status: 'pending'
      }])
      .select()
      .single();

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting quote:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : '견적 요청 중 오류가 발생했습니다.' 
    };
  }
}