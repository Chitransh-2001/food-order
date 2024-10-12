const express = require('express');
const app = express();
const port = 4000;
const connectToDatabase = require("./Db");
connectToDatabase();
app.use((req,res,next)=>{
     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
     res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-REquested-With,Content-type, Accept"
     )
     next();
}

)
app.use(express.json())
app.use("/api",require("./Routes/DisplayData"))
app.use("/api",require("./Routes/CreateUser"))
app.use("/api",require("./Routes/OrderData"))
app.listen(port,()=>{
       console.log("Server has been started successfully");
})