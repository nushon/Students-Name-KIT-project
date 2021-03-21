const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile('./index.html', 'utf8', function(err, data){
            res.end(data);
        })
        // TODO 1
        // READ AND SEND DATA IN index.html
    }else if(req.url === "/names"){ 
            fs.readFile('./names.json', 'utf8', function(err, data){
                let dataconvert = JSON.parse(data);
                res.end(JSON.stringify(dataconvert))
                console.log(dataconvert);

                 
            })
        }
        })
        // TODO 2
        // READ AND SEND DATA IN names.json
 


server.listen(3000, () => {
    console.log("Your application is listening on port 3000");
})