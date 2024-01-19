const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
config();
const cloneRoutes = require('./routes/clone.routes.js');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use('/api', cloneRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log('App is running');
});
