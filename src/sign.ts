
import bcrypt from 'bcrypt';
import { Pool } from 'pg';


const pool = new Pool({
  user: 'rtd',
  host: '54.169.69.87',
  database: 'pe8db',
  password: 'Tiny722$',
  port: 3306,
});


async function signIn(username: string, password: string): Promise<boolean> {
  
  const result = await pool.query('SELECT password FROM users WHERE username = $1', [username]);
  if (result.rowCount === 0) {
    
    return false;
  }

  
  const hashedPassword = result.rows[0].password;

  
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}


async function createUser(username: string, password: string): Promise<void> {
  
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

 
  const hashedPassword = await bcrypt.hash(password, salt);

  
  await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
}
