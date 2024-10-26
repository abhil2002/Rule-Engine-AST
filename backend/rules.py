class Node:
    def __init__(self, type, left=None, right=None, value=None):
        self.type = type
        self.left = left
        self.right = right
        self.value = value

def create_rule(rule_string):
    # Implement parsing logic here
    return Node("operator", left=Node("operand", value="age"), right=Node("operand", value=30))

def combine_rules(rules):
    if not rules:
        return None
    combined_ast = Node("operator", left=create_rule(rules[0]))
    for rule in rules[1:]:
        combined_ast = Node("operator", left=combined_ast, right=create_rule(rule))
    return combined_ast

def evaluate_rule(ast, data):
    if ast.type == "operand":
        return data[ast.value] > ast.value  # Simplified comparison for demonstration
    elif ast.type == "operator":
        left_eval = evaluate_rule(ast.left, data)
        right_eval = evaluate_rule(ast.right, data)
        if ast.value == "AND":
            return left_eval and right_eval
        elif ast.value == "OR":
            return left_eval or right_eval
