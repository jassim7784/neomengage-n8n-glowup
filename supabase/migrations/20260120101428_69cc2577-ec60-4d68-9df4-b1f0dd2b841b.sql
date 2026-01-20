-- Create contact_submissions table for storing form data
-- This table stores all contact form submissions from EnquireSection and Contact page
CREATE TABLE public.contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  consent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can submit the contact form)
CREATE POLICY "Allow public inserts" ON public.contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Add comment to table for documentation
COMMENT ON TABLE public.contact_submissions IS 'Stores contact form submissions from website visitors';