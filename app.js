//depencencies
const http = require('http');
const fs = require('fs');

//create port
const PORT = 3000;

//create getirBiDate variable to represent time // new Date() for to get time // to.TimeString() for converting time to string
const getirBiDate = new Date().toTimeString();

//create server
const getirBiServer = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
            res.writeHead(200, {'Content-Type': 'text.html'} );
            res.write('HOME PAGE')
    }else if (req.url === '/about') {
            res.writeHead(200, {'Content-Type': 'text.html'} );
            res.write('ABOUT PAGE')
    }else if (req.url === '/contact') {
            res.writeHead(200, {'Content-Type': 'text.html'} );
            res.write('CONTACT PAGE')
    } else {
            res.write('404 NOT FOUND')
           }  

    //keep log records for requests with their times and results!
    if (req.url === '/' || req.url === '/home' || req.url === '/about' || req.url === '/contact')  {
        fs.appendFile('getirBiLog.txt', `${req.url} requested, at ${getirBiDate} returned the page successfully!\n`, function (err) {
            if (err) throw err;
            console.log('Appending is successful!');
            })
     }else fs.appendFile('getirBiLog.txt', `${req.url} requested, at ${getirBiDate}  returned 404 PAGE NOT FOUND!\n`, function (err) {
          if (err) throw err;
            console.log('Appending is successful!');
          })
    res.end()
})

getirBiServer.listen(PORT);
console.log(`Server is up and running on port ${PORT}`);