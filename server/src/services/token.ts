import base64url from 'base64url';
import crypto from 'crypto';

const algorithm = 'aes-256-cfb';
const secret = '9yV0B8dCCa6X5EHO4NQaqVRADX9YR0fl';
const iv = 'ba948aad8c2a66b2';

export function encrypt({
  username,
  password,
}: { username: string, password: string }) {
  const timestamp = Math.floor(Date.now() / 1000);
  const stringToEncrypt = `${username}:${password}:${timestamp}`;
  const cipher = crypto.createCipheriv(algorithm, secret, iv);
  let encrypted = cipher.update(stringToEncrypt, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return base64url.fromBase64(encrypted);
}

export function decrypt(encrypted: string) {
  const unsafeBase64 = base64url.toBase64(encrypted);
  const decipher = crypto.createDecipheriv(algorithm, secret, iv);
  let decrypted = decipher.update(unsafeBase64, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  const [username, password, timestamp] = decrypted.split('|');
  return {
    username, password, timestamp,
  };
};

