import { readFileSync, writeFileSync } from 'fs';

const data = readFileSync("./data/4pp.csv", "utf8");
const lines = data.split("\n");
const headers = lines[0].split(",");

const items: any = [];

for(let i = 1; i < lines.length; i++){
    const item = {};
    const line = lines[i].split(",");
  
    for(let j = 0; j < headers.length; j++){
        item[headers[j]] = line[j];
    }
  
    items.push(item);
}

const postcodes = {};

items.filter(item => item.postcode).forEach(item => {
    postcodes[item.postcode] = {
        latitude: item.latitude,
        longitude: item.longitude
    }
});

writeFileSync("./result/4pp.json", JSON.stringify(postcodes, null , 4));