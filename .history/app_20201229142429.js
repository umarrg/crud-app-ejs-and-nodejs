const express = require('express');

const app = express();

app.set('view engine', 'ejs' );

app.get('/', (req, res) => {

    const items =  [
       {name: 'Mobile phone', price: 1000},
       {name: 'Pencil', price: 20},
       {name: 'Hanckerchef', price: 300}
    ];
    res.render('index', {items: items});
});

app.get('/additem', (req, res) => {
    res.render('additem');
});
app.use((req, res) => {
    res.render('error');
});


app.listen(3000, ()=> {
    console.log('our app is running on port 3000');
})