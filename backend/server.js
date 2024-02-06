require("dotenv").config();
const express = require("express");
const route= require("./router/auth-routes");
const FormRouter = require("./router/form-routes")
const con= require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

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

