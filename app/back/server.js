const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());  // Corrected from cor() to cors()

app.use(express.json());

// Define a route to get random bee facts
app.get('/api/facts', (req, res) => {
    const facts = [
        "Bees have five eyes.",
        "Bees fly at a speed of around 25km per hour.",
        "Bees communicate through chemicals called pheromones.",
        "The queen bee can live up to five years.",
        "Worker bees are all female."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json({ fact: randomFact });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
