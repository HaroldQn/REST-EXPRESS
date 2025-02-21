import dotenv from 'dotenv';

dotenv.config();

const { 
  NAME_USER: name_user_db = 'root',
  PASS_USER: pass_user_db = '',
  NAME_DB: name_db = 'companydb',
} = process.env;
console.log(name_user_db, pass_user_db, name_db);

export const EnvConfig = () => ({
  name_user_db,
  pass_user_db,
  name_db
});
