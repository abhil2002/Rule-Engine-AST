import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRuleForm from './components/CreateRuleForm';
import CombineRules from './components/CombineRules';
import EvaluateRule from './components/EvaluateRule';
import RuleDisplay from './components/RuleDisplay';
import Home from './components/Home'; 
import Navbar from './components/Navbar'; // Adjusted path to Navbar
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const exampleRules = [
        {
            rule_string: "age > 30",
            ast: { type: "operator", value: ">", left: "age", right: 30 }
        },
        {
            rule_string: "department == 'Sales'",
            ast: { type: "operator", value: "==", left: "department", right: "Sales" }
        }
    ];

    return (
        <Router>
            <Navbar /> {/* Use the Navbar component */}
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateRuleForm />} />
                    <Route path="/combine" element={<CombineRules />} />
                    <Route path="/evaluate" element={<EvaluateRule />} />
                    <Route path="/rules" element={<RuleDisplay rules={exampleRules} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
