import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBdGXxFjWOhJtjsQVLwKafc5sesTwtFAf4",
    authDomain: "vuetalk-5f246.firebaseapp.com",
    projectId: "vuetalk-5f246",
    storageBucket: "vuetalk-5f246.appspot.com",
    messagingSenderId: "471370377000",
    appId: "1:471370377000:web:24d411a8d61fbf8e61921d"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();