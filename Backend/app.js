const express = require("express")
const app= express()
const dotenv= require("dotenv")
const path=require("path")
const env = require("process")
const cors= require("cors")
const connectDatabase= require("./config/connectDatabase")
dotenv.config({path:path.join(__dirname, "config", "config.env")})

const product= require("./routes/products")
const order= require("./routes/order")
const featuredProduct= require("./routes/featuredproduct")

connectDatabase();

app.use(express.json())
app.use(cors())
app.use("/api/v1",product)
app.use("/api/v1",order)
app.use("/api/v1",featuredProduct)

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to ${process.env.PORT} in ${process.env.NODE_ENV}`);
})