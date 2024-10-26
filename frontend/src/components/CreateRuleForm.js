import React, { useState } from 'react';
import { createRule } from '../api/api';
import './CreateRuleForm.css'; // Import the CSS file for styling

function CreateRuleForm() {
    const [ruleString, setRuleString] = useState('');
    const [ast, setAst] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createRule({ rule_string: ruleString });
        setAst(response.data.ast);
        setSuccessMessage('Rule successfully created!'); // Set success message
    };

    return (
        <div>
            <h2>Create a New Rule</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={ruleString} 
                    onChange={(e) => setRuleString(e.target.value)} 
                    placeholder="Enter rule (e.g., age > 30)" 
                    required
                />
                <button type="submit">Create Rule</button>
            </form>
            <h3>Live Preview:</h3>
            <pre>{ruleString}</pre> {/* Displaying the live preview of the rule */}
            {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
            {ast && <pre>{JSON.stringify(ast, null, 2)}</pre>}
        </div>
    );
}

export default CreateRuleForm;
