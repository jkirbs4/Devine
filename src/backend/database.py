import sqlite3
import click
from pathlib import Path
from flask import current_app, g

class DatabaseManager:

    @staticmethod
    def db_path(db_name: str) -> Path:
        """
        Compute the DB path from the active Flask app.

        @param db_name (str): The filename of the database.
        """
        instance_path = Path(current_app.instance_path)
        instance_path.mkdir(parents=True, exist_ok=True)

        return instance_path / db_name


    def connect(self, db_name: str) -> sqlite3.Connection:
        """
        Establish a per-request SQLite connection.

        @param db_name (str): The filename of the database.
        """
        if "db" not in g:
            db = sqlite3.connect(self.db_path(db_name))
            db.row_factory = sqlite3.Row
            db.execute("PRAGMA foreign_keys = ON;")
            g.db = db
        return g.db
    

    @staticmethod
    def disconnect(exception=None):
        """
        Disconnect the database.
        """
        db = g.pop("db", None)
        if db is not None:
            db.close()


    def initialize(self, db_name: str) -> bool:
        """
        Setup database and create tables from the schema.

        @param db_name (str): The filename of the database.
        """
        click.echo("Initializing new database...")

        db = self.connect(db_name)
        schema_file = Path(current_app.root_path) / "static" / "schema.sql"
        db.executescript(schema_file.read_text(encoding="utf-8"))
        db.commit()

        click.echo("Successfully initialized new database.")
        
        return True


    def delete(self, db_name: str) -> bool:
        """
        Delete database. If no path is not provided, deletes the app's configured DB.

        @param db_name (str): The filename of the database.
        """
        click.echo("Deleting database...")

        path = Path(current_app.root_path) / "instance" / db_name
        if path.exists():
            path.unlink()
            click.echo(f"Deleted {path}")
            return True

        click.echo("No database file exists to delete.")

        return False


    def inititalize_app(self, app):
        """
        Initialize the application teardown context after a disconnection.

        @param app (Flask): The web application.
        """
        app.teardown_appcontext(self.disconnect)

