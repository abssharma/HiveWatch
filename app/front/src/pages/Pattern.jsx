import React, { useState, useEffect } from 'react';

const Patterns = () => {
    const [beeFact, setBeeFact] = useState('');

    useEffect(() => {
        fetchBeeFact();
    }, []);

    const fetchBeeFact = async () => {
        // Mock fetching a random bee fact
        const facts = [
            "Bees have five eyes.",
            "Bees fly at a speed of around 25km per hour.",
            "Bees communicate through chemicals called pheromones.",
            "The queen bee can live up to five years.",
            "Worker bees are all female."
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        setBeeFact(randomFact);
    };

    return (
        <div>
            <h1>Random Bee Fact</h1>
            <p>{beeFact}</p>
            <button onClick={fetchBeeFact}>Get Another Fact</button>
        </div>
    );
};

export default Patterns;
