from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#mock data 


@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": "Hello, World!"}
    return jsonify(data)

@app.route('/api/users', methods=['GET'])
def get_users():
    users = [
    {"id": 1, "name": "Jason"},
    {"id": 2, "name": "Eliana"},
    {"id": 3, "name": "Tolu"},
    {"id": 4, "name": "Ini"}
   ]
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)