import { readFileSync, writeFileSync } from 'fs';
import postcodes from '../result/4pp.json';
import { getDistanceHageveld } from './utils/distance';

const bo = readFileSync("./data/03-09-2019_03-alle-vestigingen-bo.csv", "utf8");
const lines = bo.split("\r\n");
const headers = lines[0].split(";");

const items: any = [];

for(let i = 1; i < lines.length; i++){
    const item = {};
    const line = lines[i].split(";");
  
    for(let j = 0; j < headers.length; j++){
        item[headers[j]] = line[j];
    }
  
    items.push(item);
}

//writeFileSync("./result/result_full.json", JSON.stringify(items, null , 4));

const itemsLite = items
    .filter(item => item.VESTIGINGSNAAM)
    .map(item => {
        const postcode = postcodes[item.POSTCODE.substring(0, 4)] || { latitude: '0', longitude: '0' };

        return {
            id: item.VESTIGINGSNUMMER,
            naam: item.VESTIGINGSNAAM,
            plaats: item.PLAATSNAAM,
            latitude: postcode.latitude,
            longitude: postcode.longitude,
            distance: getDistanceHageveld(postcode.latitude, postcode.longitude)
        };
    });

writeFileSync("./result/result.json", JSON.stringify([...new Set(itemsLite)], null , 4));