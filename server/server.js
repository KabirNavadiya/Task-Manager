const express = require('express')
const app = express()
require('../database/db');
const cors = require('cors')
const authRoutes = require('./routes/authRoute');
const taskRoutes = require('./routes/taskRoute');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth',authRoutes);
app.use('/task',taskRoutes);


const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server is running  on port`,PORT);
})