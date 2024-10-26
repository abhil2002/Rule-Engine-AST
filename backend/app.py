from flask import Flask, request, jsonify
from models import db, Rules
from rules import create_rule, combine_rules, evaluate_rule

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/rule_engine'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/create_rule', methods=['POST'])
def api_create_rule():
    rule_string = request.json.get('rule_string')
    ast = create_rule(rule_string)
    # Save ast to the database
    return jsonify({"ast": ast})

@app.route('/combine_rules', methods=['POST'])
def api_combine_rules():
    rules = request.json.get('rules')
    combined_ast = combine_rules(rules)
    return jsonify({"combined_ast": combined_ast})

@app.route('/evaluate_rule', methods=['POST'])
def api_evaluate_rule():
    ast = request.json.get('ast')
    data = request.json.get('data')
    result = evaluate_rule(ast, data)
    return jsonify({"result": result})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables
    app.run(debug=True)
