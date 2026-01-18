
### **Integration Tests**

- **Purpose:** Integration tests will combine the functionality of multiple modules with the purpose of verifying that the components work together. They can be created in various sizes, ranging from combining two modules or even evaluating a whole process.
- **Scope:** Integration tests always evaluate the behavior of code written by the team, but sometimes will be written to ensure the proper functionality of external modules. This creates two classes of integration tests to consider:
    1. *Internal Testing*: These tests will evaluate combinations of modules written by the team only.
    2. *Internal-External Testing*: These tests will evaluate the behavior of modules written by the team along with software used from other sources.
- **Subsystems:** Naturally, our project is divided into various subsystems due to behavior and organizational purposes. This leads to two other categories of tests:
    1. *Intra-Subsystem Testing:* This type of integration test is purposed to validate a set of modules within a subsystem. An example test would be evaluating the behavior of multiple game objects within the game subsystem.
    2. *Inter-Subsystem Testing:* This type of integration test is designed to validate the interfaces of subsystems. An example would be a test designed to evaluate how the game results get stored inside of the database. This merges the database subsystem and game logic subsystem.