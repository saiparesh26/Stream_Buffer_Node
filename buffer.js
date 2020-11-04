const fs = require('fs');
const { createServer } = require('http');
const file = './video.mp4';

createServer((req,res) => {
    
    fs.readFile(file, (err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.writeHead(200, {'Content-Type': 'video/mp4'});
            res.end(data);
        }
    })


}).listen(3000, () => {
    console.log('buffer - http://localhost:3000');
});