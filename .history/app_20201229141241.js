const express = require('express');

const app = express();

app.set('view engine', 'ejs' );

app.get('/', (req, res) => {
    res.render('index',);
});

app.get('/additem', (req, res) => {
    res.render('additem');
});
app.use((req, res) => {
    res.render('error');
});


app.listen(9000, ()=> {
    console.log('our app is running on port 9000');
})