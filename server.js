var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
const { getAlbum } = require('./google-photos');

var app = express();
app.use(serveStatic(path.join(__dirname, "dist")));

// authorize CORS (for demo only)
app.use(function (req, res, next) {
 const origin = req.headers.origin;
 if (origin) {
  res.setHeader('Access-Control-Allow-Origin', origin);
 }
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/photos/:albumId/:meetupId', async function (request, response) {
 try {
  const results = await getAlbum(request.params.albumId, request.params.meetupId)
  response.json(results);
 }
 catch (e) {
  response.status(500)
 }
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log("server started on port " + port);
