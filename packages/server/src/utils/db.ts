import * as sqlite3 from 'sqlite3';
import Debug from 'debug';

const debug = Debug('db');
const db = new sqlite3.Database('database.db');

export const init = async (): Promise<void> => {
    await run(
        `CREATE TABLE IF NOT EXISTS gebruikers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            emailadres TEXT,
            wachtwoord TEXT,
            roepnaam TEXT,
            tussenvoegsel TEXT,
            achternaam TEXT,
            geslacht TEXT,
            telefoonnummer TEXT,
            basisschool TEXT,
            verwijzing TEXT
        )`
    );

    await run(
        `CREATE TABLE IF NOT EXISTS activaties (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            emailadres TEXT,
            token TEXT,
            gebruikt TEXT,
            aangemaakt TEXT
        )`
    );
};

export const get = (query, data?) => {
    return new Promise((resolve, reject) => {
        debug('GET %s %o', query, data);
        db.get(query, data, (error, row) => {
            if (error) {
                debug('ERROR %s %o', query, data);
                reject(error);
            } else {
                resolve(row);
            }
        });
    });
};

export const all = (query, data?) => {
    return new Promise((resolve, reject) => {
        debug('ALL %s %o', query, data);
        db.all(query, data, (error, rows) => {
            if (error) {
                debug('ERROR %s %o', query, data);
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
};

export const run = (query, data?) => {
    return new Promise((resolve, reject) => {
        debug('RUN %s %o', query, data);
        db.run(query, data, (error) => {
            if (error) {
                debug('ERROR %s %o', query, data);
                reject(error);
            } else {
                resolve();
            }
        });
    });
};

