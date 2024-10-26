# Rule-Engine-AST

The goal of this project is to develop a simple 3-tier rule engine application using an Abstract Syntax Tree (AST) to determine user eligibility based on attributes like age, department, income, spend, etc. The system allows for dynamic creation, combination, and evaluation of conditional rules.

## Project Structure
The project is divided into two main components:

Backend: Python API (FastAPI/Flask/Django)
Frontend: React.js

## Backend: Python (API)
### Prerequisites
Python 3.8 or higher
Virtual environment (optional but recommended)
Required dependencies (FastAPI, Flask, Django, or other libraries)
PostgreSQL/MySQL/SQLite for database

## Setup Instructions
1. Clone the repository:
   
```git clone https://github.com/yourusername/rule-engine-with-ast.git
  cd rule-engine-with-ast/backend
```

2. Create and activate a virtual environment (optional but recommended):

```
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate  # Windows
```

3. Install the dependencies using requirements.txt:

```
pip install -r requirements.txt
```

4. Set up the database
The backend API will be running at http://127.0.0.1:8000.

## Frontend: React.js

#### Prerequisites
Node.js (version 18.x or higher recommended)
npm or yarn (package managers)

### Setup Instructions
1. Navigate to the frontend directory:
```
cd ../frontend
```

2. Install the dependencies:
```
npm install  # or yarn install
```

3. Run the frontend:
```
npm start
```
The React app will be running at http://localhost:3000.
## Running the Application

1. Start the backend server:

```
uvicorn main:app --reload
```

2.Start the frontend React app:
```
npm start
```
Access the application at http://localhost:3000 to interact with the Rule Engine UI.

## Technologies Used
#### Backend: Python (FastAPI/Flask/Django), SQLAlchemy, Pydantic
#### Frontend: React.js
#### Database: SQLite/PostgreSQL/MySQL
#### Testing: Pytest, React Testing Library
