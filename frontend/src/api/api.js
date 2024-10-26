import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const createRule = async (ruleData) => {
    return await axios.post(`${API_URL}/create_rule`, ruleData);
};

export const combineRules = async (rulesData) => {
    return await axios.post(`${API_URL}/combine_rules`, rulesData);
};

export const evaluateRule = async (evaluationData) => {
    return await axios.post(`${API_URL}/evaluate_rule`, evaluationData);
};
