const express = require('express');
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// User Routes
app.use("/api/v1/users",userRoutes);


app.listen(8000,()=>{
    console.log("server running 8000");
})