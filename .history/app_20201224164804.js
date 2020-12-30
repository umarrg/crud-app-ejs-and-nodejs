const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(<h1> you are</h1>)
})