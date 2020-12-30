const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1> you are welcome</h1>)
});

app.listen(9000, ()=> {
    console.log('our app is running on port 9000');
})