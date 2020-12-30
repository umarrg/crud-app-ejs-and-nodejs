const express = require('express');

const app = express();

app.set('view engine', 'ejs' );

app.get('/', (req, res) => {

    const items =  [
       {name: 'Mobile phone', price: 1000},
       {name: 'Pencil', price: 20},
       {name: 'Hanckerchef', price: }
    ];
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