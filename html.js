const fs = require('fs');
const https = require('http');

const hostname = 'localhost';
const port = 3000;



const server = https.createServer( async (req, res) => {

    res.statusCode = 200;
    let path = req.url;
    let fileContent;

    if(path == "/")
        path = "index.html";

    try{
        fileContent = fs.readFileSync(path);
        res.end(fileContent, 'utf-8');
    }
    catch(err){
        if(req.url != "/favicon.ico"){
            fileContent = fs.readFileSync("404.html");
            res.end(fileContent);
        }
    }

});

server.listen(port, hostname, () => {
    console.log("Server listening on " + port);
});




// express version
// comment one of the two before testing

const express = require("express");
const app = express();

// routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.listen(port, hostname, () => {
    console.log("Server listening on " + port);
});
