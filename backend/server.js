require("dotenv").config();
const express = require("express");
const route= require("./router/auth-routes")
const con= require("./utils/db")

const app = express();

const PORT = 3000;

app.use(express.json())
app.use("/api/",route);

con().then(()=>{
    app.listen(PORT, () => {
        console.log(`Sever is running at ${PORT}`);
      });
})

