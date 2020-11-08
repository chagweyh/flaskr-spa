from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/posts')
def get_posts():
    return jsonify([{'title': 'first post', 'body': 'first post\'s body'}])
