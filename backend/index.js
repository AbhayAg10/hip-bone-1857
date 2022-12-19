const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors")

const { notFound, errorHandler } = require("./MiddleWares/errorMiddleWare");
const companies = require("./routes/companies.routes");
const authConnection = require("./dataBase/db");
const userRoutes=require("./routes/userRoutes");
require("dotenv").config();

const app=express();
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("FROM HOME")
})
const PORT = 8085;
app.use("/api/users",userRoutes)
app.use("/api/companies", companies);


authConnection();

app.use(notFound)
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server Runnig On http://localhost:${PORT}`)
})
