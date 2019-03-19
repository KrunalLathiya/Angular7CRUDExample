const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const businessRoute = require('./routes/business.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Cannot connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'../dist/angular7crud')));

app.get('/getversion',function(req,res){
  var version=process.env.version || "1.0"
  res.status(200).json({version:version})
});
app.use('/business', businessRoute);

app.use('/',function(req,res){
  res.sendFile(path.join(__dirname,'../dist/angular7crud','index.html'))
});
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});