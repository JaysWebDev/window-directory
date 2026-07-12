-- ============================================================
-- Migration 002 — Add missing columns to window_companies
-- Run in Supabase SQL Editor (project woqpaauhejesfjdygzxh)
-- ============================================================

-- Scraper-written columns missing from initial table creation
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS is_active       BOOLEAN DEFAULT true;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS is_verified     BOOLEAN DEFAULT false;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS is_approved     BOOLEAN DEFAULT true;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS is_featured     BOOLEAN DEFAULT false;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS is_claimed      BOOLEAN DEFAULT false;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS plan            TEXT    DEFAULT 'free';
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS monthly_lead_cap INTEGER DEFAULT 5;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS leads_this_month INTEGER DEFAULT 0;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS vertical_slug   TEXT    DEFAULT 'window-cleaning';

-- Site-queried columns
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS short_description TEXT;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS description        TEXT;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS logo_url           TEXT;
ALTER TABLE window_companies ADD COLUMN IF NOT EXISTS services           TEXT[] DEFAULT '{}';

-- Performance index
CREATE INDEX IF NOT EXISTS idx_window_companies_approved
  ON window_companies(is_approved, is_featured, rating DESC);

-- RLS: public can read approved listings
ALTER TABLE window_companies ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read approved" ON window_companies;
CREATE POLICY "Public read approved"
  ON window_companies FOR SELECT
  USING (is_approved = true);
