import React, { useState, useEffect } from 'react';

const Patterns = () => {
    const [beeFact, setBeeFact] = useState('');
    const [loading, setLoading] = useState(false);  // Define loading state

    useEffect(() => {
        fetchBeeFact();
    }, []);

    const fetchBeeFact = async () => {
        setLoading(true);  // Start loading before fetching
        try {
            const response = await fetch('http://localhost:3001/api/facts');
            const data = await response.json();
            setBeeFact(data.fact);  // Update state with new fact
        } catch (error) {
            console.error('Failed to fetch bee fact:', error);
        } finally {
            setLoading(false);  // End loading after fetch completes
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Random Bee Fact</h1>
            {loading ? <p>Loading...</p> : <p>{beeFact || 'Click the button to get a fact!'}</p>}
            <button onClick={fetchBeeFact} disabled={loading} style={{
                padding: '10px 20px',
                fontSize: '16px',
                color: 'white',
                backgroundColor: 'blue',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px'
            }}>
                Get Another Fact
            </button>
        </div>
    );
};

export default Patterns;
