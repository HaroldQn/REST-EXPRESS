import dotenv from 'dotenv';

dotenv.config();

const { 
  HOST_DB: host_db = 'localhost',
  PORT_DB: port_db = 3306,
  NAME_USER: name_user_db = 'root',
  PASSWORD_DB: pass_user_db = '',
  NAME_DB: name_db = 'companydb',
} = process.env;
console.log(host_db, port_db, name_user_db, pass_user_db, name_db);

export const EnvConfig = () => ({
  name_user_db,
  pass_user_db,
  name_db,
  host_db,
  port_db
});
