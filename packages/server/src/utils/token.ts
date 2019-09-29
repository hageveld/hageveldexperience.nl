import { randomBytes } from 'crypto';

export const generateToken = () => {
    return new Promise((resolve, reject) => {
        randomBytes(32, (err, buf) => {
            if(err) {
                reject(err);
            } else {
                resolve(buf.toString('hex'));
            }
        });
    });
}