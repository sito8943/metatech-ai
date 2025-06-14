import { createClient } from "@supabase/supabase-js";

// config
import config from "../config";

// Create a single supabase client for interacting with your database
const supabase = createClient(config.supabase.url, config.supabase.key);
