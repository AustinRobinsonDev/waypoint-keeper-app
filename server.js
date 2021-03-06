const express = require('express');
const connectDB = require('./config/db');
const path = require('path')

const app = express();

//connectDB
connectDB();

//init middleware
app.use(express.json({ extended: false }));

//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/waypoints', require('./routes/waypoints'));

//server static assets in production

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('connected succesful'));