const express = require('express')();
const multer = require('multer');
const pdf2json = require('pdf2json');

const port = 3000;

express.get('/', (req, res) => {
  res.send('Hello world');
});

express.listen(port, () => console.log(`Server running on port ${port}`));
