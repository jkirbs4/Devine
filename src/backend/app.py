from flask import Flask
import click
from database import DatabaseManager

app = Flask(__name__)
dm = DatabaseManager()
dm.inititalize_app(app)

@app.cli.command('init-db')
@click.argument('db_name')
@click.confirmation_option(prompt='This will initialize the app database. Continue?')
def initialize_db_cmd(db_name: str):
    dm.initialize(db_name)
    click.echo("Initialized database.")

@app.cli.command('delete-db')
@click.argument('db_name')
@click.confirmation_option(prompt='This will permanently delete the app database. Continue?')
def delete_db_cmd(db_name: str):
    dm.delete(db_name)
    click.echo("Database deleted.")

@app.cli.command('reset-db')
@click.argument('db_name')
@click.confirmation_option(prompt='This will reset the app database, wiping all data. Continue?')
def reset_db_cmd(db_name: str):
    dm.delete(db_name)
    dm.initialize(db_name)

if __name__ == '__main__':
    app.run(debug=True)
