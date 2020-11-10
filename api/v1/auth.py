from flask import Blueprint, request, jsonify

from werkzeug.security import check_password_hash
from werkzeug.security import generate_password_hash

from v1.db import get_db

bp = Blueprint("auth", __name__, url_prefix="/auth")


@bp.route("/register", methods=["POST"])
def register():
    """Register a new user.

    Validates that the username is not already taken. Hashes the
    password for security.
    """
    username = request.json["username"]
    password = request.json["password"]
    db = get_db()
    cur = db.cursor()
    error = None

    if not username:
        error = "Username is required."
    elif not password:
        error = "Password is required."

    cur.execute("SELECT id FROM users WHERE username = %s", (username,))

    if cur.fetchone() is not None:
        error = f"User {username} is already registered."

    if error is None:
        cur.execute(
            "INSERT INTO users (username, password) VALUES (%s, %s) RETURNING id",
            (username, generate_password_hash(password)),
        )
        user_id = cur.fetchone()[0]
        db.commit()

        return jsonify({"user_id": user_id}), 201

    return jsonify({"error": error}), 422
