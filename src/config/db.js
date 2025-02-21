import { createPool } from 'mysql2/promise';
import { EnvConfig } from './env.config.js';

export const pool = createPool({
  host: EnvConfig().host_db,
  user: EnvConfig().name_user_db,
  port : 3306,
  password: EnvConfig().pass_user_db,
  database: EnvConfig().name_db
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión a la base de datos exitosa');
    connection.release();
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error.message);
  }
})();