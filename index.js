const express =  require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const hbs = require ('hbs');
const app = express();

app.set('view engine','hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/assets', express.static(__dirname  + '/public'));

app.get('/index',(req,res) => {
	res.render('index_view');
});

app.get('/contact', (req,res) => {

	res.render('contact_view');
});

app.get('/about', (req,res) => {
	res.render('about_view');
});

app.listen(8000,() => {
	console.log('Server Running On Port 8000....');
});