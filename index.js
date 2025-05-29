var express =require('express')
var path = require('path');
var app=express()
const express = require('express');
const path = require('path');

const app = express();
const host = '127.0.0.1';
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route
app.get('/', function (req, res) {
    const people = [
        { name: 'Amita', age: 25, id: 1, range: 'Adult' },
        { name: 'Bobby', age: 35, id: 2, range: 'Adult' },
        { name: 'Sumit', age: 15, id: 3, range: 'Young' },
        { name: 'Alice', age: 12, id: 4, range: 'Young' },
        { name: 'Rohit', age: 20, id: 5, range: 'Adult' },
        { name: 'Mohit', age: 27, id: 6, range: 'Adult' },
        { name: 'Rohan', age: 10, id: 7, range: 'Young' }
    ];

    res.render('index', { title: 'Welcome to EJS Page!', people });
});

// Start the server
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
