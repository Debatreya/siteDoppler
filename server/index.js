const express = require('express')
const cors = require('cors')
const { config } = require('dotenv')
config();
const cloneRoutes = require('./routes/clone.routes.js')

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin: [process.env.FRONTEND_URL]
}));

app.use('/api', cloneRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
    console.log('App is running');
})