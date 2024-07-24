import React, { useState, useEffect } from 'react';

const Fact = () => {
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
      <div style={{ padding: '20px', fontFamily: 'Arial', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
              borderRadius: '10px', 
              fontSize: '50px',
              padding: '20px',
              maxWidth: '400px',
              width: '100%', 
              textAlign: 'center',
              marginBottom: '20px',
              
          }}>
              {loading ? <p>Loading...</p> : <p>{beeFact || 'Click the button to get a fact!'}</p>}
          </div>
          <button onClick={fetchBeeFact} disabled={loading} style={{
              padding: '10px 20px',
              fontSize: '16px',
              color: 'yellow',
              backgroundColor: 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
          }}>
              Get Another Fact
          </button>
      </div>
  );
};

export default Fact;
