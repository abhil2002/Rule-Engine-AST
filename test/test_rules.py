import pytest
from backend.rules import create_rule, combine_rules, evaluate_rule

def test_create_rule():
    rule_string = "age > 30"
    ast = create_rule(rule_string)
    assert ast.type == "operator"  # Adjust based on actual implementation

def test_combine_rules():
    rules = ["age > 30", "department = 'Sales'"]
    combined_ast = combine_rules(rules)
    assert combined_ast is not None  # Adjust assertions based on actual combined logic

def test_evaluate_rule():
    data = {"age": 35, "department": "Sales"}
    ast = create_rule("age > 30")
    result = evaluate_rule(ast, data)
    assert result is True
