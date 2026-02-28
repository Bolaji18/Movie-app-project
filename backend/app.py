from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

#Create the database tables
class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    details = db.Column(db.String(500), nullable=True)

with app.app_context():
    db.create_all()
    
# API routes

@app.route('/items', methods=['POST'])
def add_item():
    data = request.get_json()
    if not data or 'name' not in data or 'details' not in data:
        return jsonify({"error": "Name and details are required"}), 400
    
    new_item = Item(name=data['name'], details=data['details'])
    db.session.add(new_item)
    db.session.commit()
    
    return jsonify({"message": "Item added successfully", "item": {"id": new_item.id, "name": new_item.name, "details": new_item.details}}), 201
    
@app.route('/items', methods=['GET'])
def get_items():
    items = Item.query.all()
    output = []
    for item in items:
        item_data = {"id": item.id, "name": item.name, "details": item.details}
        output.append(item_data)
    return jsonify({"items": output})



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