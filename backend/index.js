const express = require('express')

const app = express();

require('dotenv').config();



const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`server running on port ${port}`)
)