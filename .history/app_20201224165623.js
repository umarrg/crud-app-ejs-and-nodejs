const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root: __dirname});
});

app.get('/add-item', (req, res) => {
    res.sendFile('./public/add_item.html', {root: __dirname});
});
app.get('/add-item', (req, res) => {
    res.sendFile('./public/.html', {root: __dirname});
});

app.listen(9000, ()=> {
    console.log('our app is running on port 9000');
})