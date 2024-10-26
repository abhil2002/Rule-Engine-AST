import React from 'react';
import './Home.css';  // Create a separate CSS file for home component styling

function Home() {
    return (
        <div className="home-container">
            <h1 className="welcome-message">Welcome to Rule Engine with AST</h1>
            <p className="welcome-description">
                Build, combine, and evaluate rules with ease using our powerful abstract syntax tree-based engine.
            </p>
            <button 
                className="cta-button" 
                onClick={() => window.location.href='/create'}
            >
                Start Creating Rules
            </button>
            <div className="examples-container">
                <h2>Examples of Rule Creation:</h2>
                <ul>
                    <li>Rule 1: <code>age &gt; 30</code> - Checks if a user is older than 30.</li>
                    <li>Rule 2: <code>department == 'Sales'</code> - Validates if the user belongs to the Sales department.</li>
                    <li>Rule 3: <code>income &gt;= 50000</code> - Evaluates if a user's income is at least $50,000.</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
