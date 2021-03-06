const { json } = require('express');
const express = require('express');
const mongodb = 'mongodb+srv://umarabox:secretPass@cluster0.t0h3t.mongodb.net/<aboxcrud>?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const Item = require ('./models/item');
mongoose.connect(mongodb, {useNewUrlParser: true,  useUnifiedTopology: true}).then(()=> console.log('we are connected to mongodb')).catch(err => console.log(err));

const app = express();


app.set('view engine', 'ejs' );



app.get('/', (req, res) => {
  res.redirect('/get-items');
    
});


app.get('/get-item', (req, res)=> {

    Item.findBy().then(result =>  res.render('index', {items: result }).catch(err => res.send(err)));
})

app.get('/additem', (req, res) => {
    res.render('additem'); 
});
app.use((req, res) => {
    res.render('error');
});




app.listen(4000, ()=> {
    console.log('our app is running on port 4000');
})