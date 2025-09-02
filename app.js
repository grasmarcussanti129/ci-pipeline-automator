const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Continuous Integration Pipeline Automator!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});