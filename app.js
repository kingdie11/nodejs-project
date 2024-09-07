const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Register' });
  });

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.post('/submit', (req, res) => {
    const { name, email, password } = req.body;
    res.render('submit', {
        title: 'Form Submitted',
        name,
        email,
        password: password.replace(/./g, '*') 
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});