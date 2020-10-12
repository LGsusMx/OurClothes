
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCcWmKDhh_rqjRsjPF66mucIhzwzCDgiRs",
authDomain: "ourclothes-d39b4.firebaseapp.com",
databaseURL: "https://ourclothes-d39b4.firebaseio.com",
projectId: "ourclothes-d39b4",
storageBucket: "ourclothes-d39b4.appspot.com",
messagingSenderId: "982199220365",
appId: "1:982199220365:web:7de489aeae2708f25ccac4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();