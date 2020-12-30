const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', )
});

app.listen(9000, ()=> {
    console.log('our app is running on port 9000');
})