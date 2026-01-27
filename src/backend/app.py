from flask import Flask
import click
from database import DatabaseManager

app = Flask(__name__)
dm = DatabaseManager()
dm.inititalize_app()

@app.cli.command('init-db')
@click.confirmation_option(prompt='This will initialize the app database. Continue?')
def initialize_db_cmd():
    dm.initialize()
    click.echo("Initialized database.")

@app.cli.command('delete-db')
@click.confirmation_option(prompt='This will permanently delete the app database. Continue?')
def destroy_db_cmd():
    dm.delete()
    click.echo("Database deleted.")

@app.cli.command('reset-db')
@click.confirmation_option(prompt='This will reset the app database, wiping all data. Continue?')
def reset_db_cmd():
    dm.delete()
    dm.initialize()

if __name__ == '__main__':
    app.run(debug=True)
