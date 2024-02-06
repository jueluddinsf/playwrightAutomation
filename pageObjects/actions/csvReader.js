const fs = require('fs');
const csv = require('csv-parse');
const csvReader=require('./GoogleSearchPage')

class CsvReader {

   async readKeyWords(filePath) {
        return new Promise((resolve, reject) => {
            let keywords = [];
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => keywords.push(data.keyword))
                .on('end', () => { resolve(keywords)
                });
    });


    }


}   
module.exports = CsvReader