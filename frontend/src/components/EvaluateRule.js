import React, { useState } from 'react';
import { evaluateRule } from '../api/api';
import './EvaluateRule.css';  // Make sure to create a CSS file for styling

function EvaluateRule() {
    const [ast, setAst] = useState('');
    const [data, setData] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await evaluateRule({
                ast: JSON.parse(ast),
                data: JSON.parse(data),
            });
            setResult(response.data.result);
        } catch (error) {
            setResult(false);  // If an error occurs, set result to false
        }
    };

    return (
        <div>
            <h2>Evaluate Rule</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={ast}
                    onChange={(e) => setAst(e.target.value)}
                    placeholder="Enter AST"
                    required
                />
                <textarea 
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="Enter data (JSON format)"
                    required
                />
                <button type="submit">Evaluate Rule</button>
            </form>
            {result !== null && (
                <div className={`result-box ${result ? 'success' : 'failure'}`}>
                    Result: {result.toString()}
                </div>
            )}
        </div>
    );
}

export default EvaluateRule;
