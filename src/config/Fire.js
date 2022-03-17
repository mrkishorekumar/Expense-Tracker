import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBTtr54zJb0L0m8NWGGLFH9jn4DyUaripg",
    authDomain: "expense-tracker-web-app-4a8bb.firebaseapp.com",  
    projectId: "expense-tracker-web-app-4a8bb",
    storageBucket: "expense-tracker-web-app-4a8bb.appspot.com",
    messagingSenderId: "573791036831",
    appId: "1:573791036831:web:940ceeaa6044231f10c9aa"
};


const fire = firebase.initializeApp(config);
export default fire;
