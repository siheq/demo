
const utils = require('./utils')
const path = require('path')
const
bodyParser = require('body-parser'),
session = require('express-session'),
MongoStore = require('connect-mongo')(session),
favicon = require('serve-favicon'),
mongoose = require('mongoose')
cookieParser = require('cookie-parser'),
methodOverride = require('method-override'),
flash = require('connect-flash'),
validator = require('validator')//can validate emile format

module.exports = (app, express)=>{

  app.engine('html', require('ejs').__express);
  app.set('view engine', 'html');
  app.set('views','dist');

  var serverRoutes = utils.getGlobbedPaths('server/!(core)/router/**/*.js')
  // require("../server/first/router/firstRoute.js")(app);
  serverRoutes.forEach( (routePath) => {
    require(path.resolve(routePath))(app);
  })
  var staticPath1 = path.posix.join('/dist/', 'static')
  app.use(staticPath1, express.static('.'+'/dist/'+'/static'))

   // Request body parsing middleware should be above methodOverride
   app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // Add the cookie parser and flash middleware
  app.use(cookieParser());
  app.use(flash());


  mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser:true});

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log('MongoDB Connected Success')
  });
}
