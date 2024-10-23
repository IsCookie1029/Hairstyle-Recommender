const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const upload = multer({dest: 'uploads/'});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Hairstyle Recommender!</h1>');
});

app.post('/upload', upload.single('photo'), (req, res) => {
    res.send({message: 'Photo upload successfully!'});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});