const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Invalid URL. Status Code:', response.statusCode);
  } else {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        console.error('Error saving file:', err);
      } else {
        const fileSize = Buffer.byteLength(body);
        console.log('Downloaded and saved ' + fileSize + ' bytes to ' + filePath);
      }
    });
  }
});