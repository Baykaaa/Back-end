import bcrypt from 'bcrypt';

function generateSHA256Hash(input: string): string {
  const hash = bcrypt.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}

const input = 'hello world';
const hash = generateSHA256Hash(input);
console.log(`SHA-256 hash of "${input}": ${hash}`);
