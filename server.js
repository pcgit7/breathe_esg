const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const dbConfig = require('./config/dbConfig');
const path = require('path');
app.use(express.json());

const userRoute = require('./Routes/userRoutes');

app.use('/api/user',userRoute);


app.listen(port , () => {
    console.log(`listning on port ${port}`);
});