const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => console.log('database connected successfully'));