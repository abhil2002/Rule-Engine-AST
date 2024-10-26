import React, { useState } from 'react';

function RuleDisplay({ rules, onDelete }) {
    const [expandedIndex, setExpandedIndex] = useState(null); // Track which card is expanded

    const handleToggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle expansion
    };

    return (
        <div>
            {rules.map((rule, index) => (
                <div key={index} className="rule-card">
                    <h3 onClick={() => handleToggleExpand(index)} style={{ cursor: 'pointer' }}>
                        Rule {index + 1}
                    </h3>
                    <p>{rule.rule_string}</p>
                    <button onClick={() => onDelete(index)}>Delete Rule</button>
                    {/* Expandable AST */}
                    {expandedIndex === index && <pre>{JSON.stringify(rule.ast, null, 2)}</pre>}
                </div>
            ))}
        </div>
    );
}

export default RuleDisplay;
