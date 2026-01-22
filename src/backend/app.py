from flask import Flask, render_template, redirect, request, url_for, g, abort
import click
import sqlite3
from pathlib import Path
import random
from datetime import date, timedelta

app = Flask(__name__)

# Ensure instance exists and place DB there
Path(app.instance_path).mkdir(parents=True, exist_ok=True)
DATABASE_NAME = "???"
DATABASE = Path(app.instance_path) / DATABASE_NAME


# =========================
# Database Helpers
# =========================
def connect_database() -> sqlite3.Connection:
    """Return a per-request SQLite connection stored on flask.g."""
    if 'db' not in g:
        conn = sqlite3.connect(DATABASE)
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA foreign_keys = ON;")
        g.db = conn
    return g.db

@app.teardown_appcontext
def close_database(error):
    db = g.pop('db', None)
    if db is not None:
        db.close()

def initialize_database() -> None:
    """Create tables from static/schema.sql."""
    click.echo(f"Initializing new database...")
    with app.app_context():
        db = connect_database()
        with open('static/schema.sql', 'r', encoding='utf-8') as schema:
            db.executescript(schema.read())
        db.commit()
        click.echo(f"Sucessfully initialized new database.")
        return True

def delete_database() -> bool:
    click.echo(f"Deleting database...")
    db_path = Path(DATABASE)
    if db_path.exists():
        db_path.unlink()
        click.echo(f"Deleted {db_path}")
        return True
    else:
        click.echo("No database file exists to delete.")
        return False


# =========================
# Routes
# =========================
@app.route('/', methods=["GET", "POST"])
def login(): ...

@app.post("/<insert here>/<int:id>/delete")
def delete_entry(id: int):
    """Delete a person and redirect back to the table (no separate page)."""
    db = connect_database()
    db.execute("DELETE FROM people WHERE id = ?", (id,))
    db.commit()

    return redirect(url_for("people"))

# @app.post("/<insert here>/<int:id>/update")
# def person_update(id: int):
#     f = request.form
#     fields = (
#         f.get('<key goes here>','').strip(),
#     )
#     db = connect_database()
#     cur = db.execute("""
#         <SQL COMMAND GOES HERE>
#     """, fields)
#     db.commit()
#     return redirect(url_for("<insert here>"))

# =========================
# CLI commands
# =========================
@app.cli.command('init-db')
@click.confirmation_option(prompt='This will initialize the app database. Continue?')
def initialize_db_cmd():
    initialize_database()
    click.echo("Initialized database.")

@app.cli.command('delete-db')
@click.confirmation_option(prompt='This will permanently delete the app database. Continue?')
def destroy_db_cmd():
    delete_database()
    click.echo("Database deleted.")

@app.cli.command('reset-db')
@click.confirmation_option(prompt='This will reset the app database, wiping all data. Continue?')
def reset_db_cmd():
    delete_database()
    initialize_database()

if __name__ == '__main__':
    app.run(debug=True)
