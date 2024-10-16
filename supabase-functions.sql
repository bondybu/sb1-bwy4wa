-- Create listicles table
CREATE OR REPLACE FUNCTION create_listicles_table()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS listicles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    site_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
END;
$$ LANGUAGE plpgsql;

-- Create items table
CREATE OR REPLACE FUNCTION create_items_table()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    listicle_id UUID NOT NULL REFERENCES listicles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    logo_url TEXT,
    description TEXT,
    button_text TEXT,
    button_link TEXT,
    order_index INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
END;
$$ LANGUAGE plpgsql;

-- Create sites table
CREATE OR REPLACE FUNCTION create_sites_table()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS sites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    domain TEXT UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
END;
$$ LANGUAGE plpgsql;