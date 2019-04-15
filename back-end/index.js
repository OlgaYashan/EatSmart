const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongooseConnection = require("./db/dbconnect").connection;
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(
  session({
    secret: "sessionsecretsessionsecret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongooseConnection
    })
  })
);


const staticPath = path.normalize(__dirname + "/public");
app.use(express.static(staticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req,res,next)=>{
  console.log(new Date().toString() +' => '+ req.originalUrl);
  next();
})

app.use(bodyParser.json());
app.use(cors());
const routes = require("./routes/api/routes")(app);

//Hendler for 404 - Resource Not Found
app.use((req,res,next)=>{
    res.status(404).send('We think you are lost!');
})

//Hendler for Error 500
app.use((err, req,res,next)=>{
  console.error(err.stack);
  res.sendFile(path.join(__dirname,  '/public/500.html'));
})


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, ()=>console.info('Server has started on ' + PORT));
