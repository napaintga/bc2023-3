const fs = require('fs');

fs.readFile('data.json', (err, data) => {
  if (err === null) {
    const jsonData = JSON.parse(data);

    const outputData = jsonData.map((item) => {
      const stockCode = item.StockCode;
      const valCode = item.ValCode;
      const attraction = item.Attraction;
      return `${stockCode}-${valCode}-${attraction}`;
    }).join('\n');

    fs.writeFile('output.txt', outputData, (err) => {
      if (err === null) {
        console.log(outputData);
      } else {
        console.log(err);
      }
    });
  }
});
