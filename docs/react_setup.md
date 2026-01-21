
# **Setting Up A React Environment With Vite**

*This guide seeks to step the user through how to setup a generic react application.*

1. Navigate to the [NodeJS Installation Page](https://nodejs.org/en/download) and download the installer. Feel free to read more about Node.js on the site if you are not familiar.
2. Run the installer that you downloaded.
3. Both `node` and `npm` (Node Package Manager) should be installed on your device at this point. Verify this installation by running the commands `node -v` and `npm -v`.
4. Run `npm create vite@latest <my-app> -- --template react` to run Vite's project generator where `<my-app>` is any name for the project directory. The flag `-- --template react` tells Vite to use the React template.
5. Navigate into the new project directory by running `cd my_app`.
6. Run `npm install` to install the project dependencies listed in `package.json`. This command should create the directory `node_modules` and the file `package-lock.json`.
7. Run `npm run dev` to start up the development server for the React application. This runs the "dev" script from `package.json`.

---
