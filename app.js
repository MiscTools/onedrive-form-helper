const express = require('express')
const app = express()

app.get('/api/:docid', function (req, res) {
  res.send(req.params.docid))
})

app.listen(3000, function () {
  console.log('Started')
})
