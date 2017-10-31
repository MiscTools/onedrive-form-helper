const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/api/:docid', function (req, res) {
  res.send(req.params.docid))
})

app.post('/api/:docid', function (req, res) {
    var user_id = req.body.id;
    var token = req.body.token;

    res.send('OK');
})

app.listen(3000, function () {
  console.log('Started')
})
