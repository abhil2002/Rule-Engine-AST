from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Rules(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rule_string = db.Column(db.Text, nullable=False)
    ast = db.Column(db.JSON, nullable=False)  # Store the AST as JSON
