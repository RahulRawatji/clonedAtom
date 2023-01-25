const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

app.post("/register",(req,res)=>{
    const { name, email, password } = req.body;
    console.log(name);
})

app.listen(4001,()=>console.log("server is running"))