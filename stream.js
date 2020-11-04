const fs = require('fs');
const { createServer } = require('http');
const file = './video.mp4';

createServer((req,res) => {
    
    res.writeHead(200, {'Content-Type' : 'video/mp4'});
    fs.createReadStream(file)
        .pipe(res)
        .on('error', console.error);

}).listen(3000, () => console.log('stream - http://localhost:3000'));