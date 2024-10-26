import React, { useState } from 'react';
import { combineRules } from '../api/api';
import './CombineRules.css';  // Make sure to create a CSS file for styling

function CombineRules() {
    const [rules, setRules] = useState([]);
    const [selectedRules, setSelectedRules] = useState([]); // To store selected rules
    const [combinedAst, setCombinedAst] = useState(null);

    const handleRuleSelection = (e, rule) => {
        const updatedSelection = e.target.checked 
            ? [...selectedRules, rule] 
            : selectedRules.filter(selectedRule => selectedRule !== rule);

        setSelectedRules(updatedSelection);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await combineRules({ rules: selectedRules });
        setCombinedAst(response.data.combined_ast);
    };

    return (
        <div>
            <h2>Combine Rules</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={rules.join('\n')}
                    onChange={(e) => setRules(e.target.value.split('\n'))}
                    placeholder="Enter rules (one per line)"
                    required
                />
                <div className="rules-list">
                    {rules.map((rule, index) => (
                        <div key={index} className="rule-item">
                            <label>
                                <input 
                                    type="checkbox" 
                                    value={rule} 
                                    onChange={(e) => handleRuleSelection(e, rule)} 
                                />
                                {rule}
                            </label>
                        </div>
                    ))}
                </div>
                <button type="submit">Combine Rules</button>
            </form>
            {combinedAst && <pre>{JSON.stringify(combinedAst, null, 2)}</pre>}
        </div>
    );
}

export default CombineRules;
