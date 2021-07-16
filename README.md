## Live Demo
This website is now live at: https://layersoflove.ca/

## Running on Local Machine
1. Clone the repository:

    ```
    git clone https://github.com/layers-of-love/layers-of-love-2021
    ```
2. `cd` into the `layers-of-love` folder and install the required dependencies:

    ```
    npm install
    ```
3. Initialize the Firebase Firestore backend:
    1. Create a [Firebase account](https://firebase.google.com/).
    2. Globally install the Firebase CLI & tools:


    ```
    npm install -g firebase-tools
    ```
    3. Login to Firebase:


    ```
    firebase login
    ```
    4. Setup Hosting (Firebase provides free hosting and domain name) and Firestore backend:


    ```
    firebase init
    ```

    ```
    ? Which Firebase CLI features do you want to setup for this folder?
    Press Space to select features, then Enter to confirm your choices.
    ◯ Database: Deploy Firebase Realtime Database Rules
    ❯◯ Firestore: Deploy rules and create indexes for Firestore
    ◯ Functions: Configure and deploy Cloud Functions
    ❯◯ Hosting: Configure and deploy Firebase Hosting sites
    ◯ Storage: Deploy Cloud Storage security rules
    ```

    ```
    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ? File public/index.html already exists. Overwrite? No
    ```
    5. Install the Firebase package:


    ```
    npm install firebase
    ```
4. Set the API keys and backend configuration:
    1. Create a `.env` file in the current (root project) directory.
    2. In the online firebase console for this project, go to: `Project Settings --> Web Apps --> SDK setup and configuration (Config)`
    3. For each configuration key, copy its value and enter it in the `.env` file like so:

    ```
    REACT_APP_<KEY>=<VALUE>
    ```

    **Note:** Must follow the same format that is already in the `src/firebase/index.js` file. For example, `index.js` has the format `process.env.REACT_APP_API_KEY`, and so, in the `.env` file, the format for the `apiKey` value must also be `REACT_APP_API_KEY=<VALUE>`.
    
    Do not include the angle brackets in `<KEY>`, or `<VALUE>`.

5. Run on your local machine:

    ```
    npm run start
    ```
    
## Deploying
1. Build the project:

    ```
    npm run build
    ```
2. Deploy to Firebase's default hosting and domain:

    ```
    firebase deploy
    ```
