const express = require('express');
const app = express();



app.set('view engine', 'ejs');


app.get('/', (req, res) => {

res.render('index');

});



app.get('/jafrin', (req, res) => {

res.render('jafrin');

});



app.get('/kaif', (req, res) => {

res.render('kaif');

});



app.get('/turjo', (req, res) => {

res.render('turjo');

});




app.get('/naief', (req, res) => {

res.render('naief');

});




app.get('/nafiz', (req, res) => {

res.render('nafiz');

});



app.get('/samin', (req, res) => {

res.render('samin');

});









const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log("server is running on http://localhost:8000");
});