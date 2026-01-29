"""
Database query functions for the games table.
"""
from flask import g
from database import DatabaseManager

class GameQueries:
    """Collection of SQL queries for the games table."""
    
    dm = DatabaseManager()
    
    @staticmethod
    def add_entry(db_name: str, account: int, game: str, category: str, 
                  memory: float, reasoning: float, speed: float, 
                  difficulty: str, completion_date: str, completion_time: str) -> bool:
        """Add a new game entry to the database."""
        db = GameQueries.dm.connect(db_name)
        try:
            db.execute(
                """INSERT INTO games 
                   (account, game, category, memory, reasoning, speed, difficulty, completion_date, completion_time)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                (account, game, category, memory, reasoning, speed, difficulty, completion_date, completion_time)
            )
            db.commit()
            return True
        except Exception as e:
            print(f"Error adding entry: {e}")
            return False

    @staticmethod
    def get_entries_by_account(db_name: str, account: int):
        """Fetch all entries associated with a given account."""
        db = GameQueries.dm.connect(db_name)
        return db.execute(
            "SELECT * FROM games WHERE account = ?",
            (account,)
        ).fetchall()

    @staticmethod
    def delete_entries_by_account(db_name: str, account: int) -> bool:
        """Delete all entries associated with a given account."""
        db = GameQueries.dm.connect(db_name)
        try:
            db.execute("DELETE FROM games WHERE account = ?", (account,))
            db.commit()
            return True
        except Exception as e:
            print(f"Error deleting entries: {e}")
            return False

    @staticmethod
    def get_entries_by_account_and_game(db_name: str, account: int, game: str):
        """Fetch all entries for a specific game associated with a given account."""
        db = GameQueries.dm.connect(db_name)
        return db.execute(
            "SELECT * FROM games WHERE account = ? AND game = ?",
            (account, game)
        ).fetchall()