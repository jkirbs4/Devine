
### **File Tree Structure**
- **src**: A directory to store the main source code.
    - **frontend**: All of the front-end code for the webapp.
    - **backend**: All of the back-end code for the webapp.
- **tst**: A directory that serves as an automated test suite.
    - **unit**: The collection of unit tests.
    - **integration**: The collection of integration tests.
- **docs**: A folder to store formal documentation for Devine.

![Devine File Tree Structure](Devine_Architecture.png)

## Standards/Documentation References
https://www.altexsoft.com/blog/technical-documentation-in-software-development-types-best-practices-and-tools/
https://medium.com/@sarvt/why-file-structure-is-important-organizing-for-efficiency-and-scalability-056b12f42e43
https://appliedtechnology.github.io/protips/folderstructure.html

---

### **Review Policy**

This policy concerns the formal review of code before branch commits.
1. **Independent Branch:** If a developer is working on a branch that is solely their responsibility, no code review is required prior to a push.
2. **Shared Branch:** If more than one developer are working on a branch, then a pull request must be generated so that the code from each developer is closely evaluated prior to commiting.
3. **Parent Directory:** If a branch has more than one sub-branches, and a developer must merge changes from one of the subranches, then the developer must create a pull request and evaluate the code with other developers actively working on the other sub-branches.