require("dotenv").config();
const express = require("express");
var cors = require('cors');
const route= require("./router/auth-routes");
const FormRouter = require("./router/form-routes")
const con= require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
var corsOptions = {
  origin: 'http://localhost:5173',
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


const PORT = 3000;

app.use(express.json())
app.use("/api/",route);
app.use("/form/",FormRouter); 
app.use(errorMiddleware)

con().then(()=>{
    app.listen(PORT, () => {
        console.log(`Sever is running at ${PORT}`);
      });
})

