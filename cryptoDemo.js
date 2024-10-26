import crypto from 'crypto';
/*
// createhash
const hash = crypto.createHash('sha256');
hash.update('password1234');

console.log(hash.digest('hex'))

//
crypto.randomBytes(16, (err, buf) => {
    if(err) throw err;
    console.log(buf.toString('hex')); // always gives a diff string
});
*/
// createCipheriv & createDecipheriv

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm,key,iv)
let  encrypted = cipher.update('hello, this is my secret message','utf8','hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm,key,iv)
let  decrypted = decipher.update(encrypted,'hex','utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);