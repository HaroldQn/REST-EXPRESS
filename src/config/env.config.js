import fs from 'fs';
import path from 'path';

// We check if you have the .env
const envPath = path.resolve(process.cwd(), '.env');
fs.existsSync(envPath) && process.loadEnvFile(envPath);

// Loanding environment variables...
const { 
  NAME_USER: name_user_db = 'root',
  PASS_USER: pass_user_db = '',
  NAME_DB: name_db = 'companydb',
} = process.env;

export const EnvConfig = () => ({
  name_user_db,
  pass_user_db,
  name_db
});