var express = require("express");
var app = express();

require('./file')(app);

app.get("/", function (req, res){
    res.send("PORT 8080");
});


var port = 8080;
app.listen(port, function() {
    console.log("server ayaga kalkti." + port);
})