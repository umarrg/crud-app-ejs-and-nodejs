const express = require('express');

const app = express();





app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root: __dirname});
});

app.get('/additem', (req, res) => {
    res.sendFile('./', {root: __dirname});
});
app.use((req, res) => {
    res.sendFile('./public/error.html', {root: __dirname});
});


app.listen(9000, ()=> {
    console.log('our app is running on port 9000');
})