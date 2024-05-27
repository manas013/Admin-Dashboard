const express =require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv').config()
const app=express();


const PORT= process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:'tthisjfjsjfjl'})
})
app.listen(PORT,()=>{
    console.log("server is running .....")
})

//routes part
app.use(cors());
app.use(bodyParser.json());
app.use('/api',require('./models/routes/admindataRoutes'))
app.use('/api',require('./models/routes/dropdownsdataRoutes'))

//connect mongoDb

const URI =process.env.MongoDBurl
console.log(process.env.MongoDBurl)

mongoose.connect(URI).then(()=>{
    console.log("db connected")
    const insertDropdownData = require('./models/dropdownsdata/scriptInsert');
    insertDropdownData(); 
}).catch(err=>{
    console.log(err)
})