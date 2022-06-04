const express = require('express');
const path = require('path');
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 8200;


app.use('/js', express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, "/css")));
app.use('/img', express.static(path.join(__dirname, "/img")));
//set hbs view engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    const url = "https://excuser.herokuapp.com/v1/excuse";
    fetch(url)
        .then((response) => response.json())
        .then((data) => res.render('index', data[0]))
        .catch((err) => console.log(err));
});
app.get('/about', (req, res) => {
        res.render('about')
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})

