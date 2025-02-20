import { createPool } from 'mysql2/promise';
import { EnvConfig } from './env.config.js';

export const pool = createPool({
  host: 'localhost',
  user: EnvConfig().name_user_db,
  port : 3306,
  password: EnvConfig().pass_user_db,
  database: EnvConfig().name_db,
});