const { response } = require('express');
const express           = require('express'),
      dbOperation       = require('./dbFiles/dbOperation'),
      cors              = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', function(req, res){
    console.log('called');
    res.send({result: 'go away'});
});

app.post('/hello', function(req, res){
    console.log('called');
    res.send({result: "OMG HI"});
});

// dbOperation.getData().then(res =>{
//     console.log(res.recordset);
// })

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));