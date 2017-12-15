const express = require('express');
const multer = require('multer');
const path = require('path');
// const pdf2json = require('pdf2json');

// Set storage engine
const storage = multer.diskStorage({
    destination: './tmp/',
    filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`)
});

// Only allow single file upload and file key in POST body must be 'pdf'
const upload = multer({ storage: storage }).single('pdf');

// Initialize app
const app = express();

// GET
app.get('/', (req, res) => res.send('Hello world'));

// POST
app.post('/upload', (req, res) =>
    upload(req, res, (err) =>
        err ? res.send(err) : res.send(req.file)));

// Listen on port 3000
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
