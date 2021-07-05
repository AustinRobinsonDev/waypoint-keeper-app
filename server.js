const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (req, res) => res.json({
    msg: 'Welcome to the test'
}));

//connectDB
connectDB();

//init middleware
app.use(express.json({ extended: false }));

//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/waypoints', require('./routes/waypoints'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('connected succesful'));