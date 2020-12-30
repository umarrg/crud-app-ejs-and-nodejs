const express = require('express');

const app = express();



app.use('/additem', (req, res) => {
    res.sendFile('./public/error.html', {root: __dirname});
});

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root: __dirname});
});

app.get('/add-item', (req, res) => {
    res.sendFile('./public/add_item.html', {root: __dirname});
});


app.listen(9000, ()=> {
    console.log('our app is running on port 9000');
})