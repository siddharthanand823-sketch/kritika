const express = require('express');
const path = require('path');
const app = express();

// RENDER KE LIYE DYNAMIC PORT YAHAN HAI 👇
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/log-response', (req, res) => {
    const { from, to, mode, answer } = req.body;
    console.log(`\n🔔 NEW NOTIFICATION!`);
    console.log(`💌 Creator: ${from}`);
    console.log(`💘 Partner: ${to}`);
    console.log(`🎭 Mode: ${mode}`);
    console.log(`✅ Answer: ${answer || 'YES'}`);
    console.log(`--------------------------\n`);
    res.json({ status: 'success' });
});

app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});