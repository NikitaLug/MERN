const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use('/api/auth', require('./routes/auth.routes.js'))

const PORT = config.get('port') ?? 5000;

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})


async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start()
