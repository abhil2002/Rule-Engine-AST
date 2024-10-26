import pytest
from backend.app import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_create_rule(client):
    response = client.post('/create_rule', json={"rule_string": "age > 30"})
    assert response.status_code == 200

def test_evaluate_rule(client):
    response = client.post('/evaluate_rule', json={"ast": {}, "data": {"age": 35}})
    assert response.json["result"] is True  # Adjust based on actual implementation
