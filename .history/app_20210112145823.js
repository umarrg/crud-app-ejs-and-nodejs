const { json } = require('express');
const express = require('express');
const mongodb = 'mongodb+srv://umarabox:secretPass@cluster0.t0h3t.mongodb.net/<aboxcrud>?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const Item = require ('./models/item');
mongoose.connect(mongodb, {useNewUrlParser: true,  useUnifiedTopology: true}).then(()=> console.log('we are connected to mongodb')).catch(err => console.log(err));

const app = express();


app.set('view engine', 'ejs' );



app.get('/', (req, res) => {

    const items =  [
       {name: 'Mobile phone', price: 1000},
       {name: 'Pencil', price: 20},
       {name: 'Hanckerchef', price: 300}
    ];
    res.render('index', {items: []});
});

app.get('/create-item', (req, res) => {

    const item = new  Item ({
        name: 'computer',
        price:5000
    
        
    });
    item.save().then(result => res.send(result));
})

app.get('/additem', (req, res) => {
    res.render('additem');
});
app.use((req, res) => {
    res.render('error');
});




app.listen(4000, ()=> {
    console.log('our app is running on port 3000');
})