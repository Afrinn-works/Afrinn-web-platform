const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const typed = require('typed.js')
// Variables
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})


app.listen(port,  () => {
    console.log(`Server started and running on port ${port}`);
});