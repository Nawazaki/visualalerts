const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Mock Social Login
app.get('/hybridauth/default/login', (req, res) => {
    const provider = req.query.provider;
    res.send(`<h1>Mock Social Login for ${provider}</h1><p>Returning to application...</p><script>setTimeout(() => window.location.href = '/', 2000);</script>`);
});

// Mock Registration
app.post('/main/registrazione.html', (req, res) => {
    console.log('Registration request:', req.body);
    res.json({ status: 'success', message: 'Registrazione completata con successo!' });
});

// Mock Login
app.post('/main/login', (req, res) => {
    console.log('Login request:', req.body);
    res.json({ status: 'success', user: { username: req.body.LoginForm_username } });
});

// Mock Contact Form
app.post('/main/contact.html', (req, res) => {
    console.log('Contact form request:', req.body);
    res.json({ status: 'success', message: 'Messaggio inviato correttamente.' });
});

// Mock Captcha
app.get('/main/captcha.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main/captcha.html'));
});

// Fallback to index.html for SPA behavior if needed
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Visualalerts restored server running at http://localhost:${port}`);
});
