import { readFileSync, writeFileSync } from 'fs';

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

writeFileSync("./result/result.json", JSON.stringify(items, null , 4));