import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBtm5XIylAgjdSuvedQcZ424G0XiCvX0w4",
	authDomain: "project-blog-7d4ac.firebaseapp.com",
	databaseURL:
		"https://project-blog-7d4ac-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "project-blog-7d4ac",
	storageBucket: "project-blog-7d4ac.appspot.com",
	messagingSenderId: "908074699032",
	appId: "1:908074699032:web:f5f023f7950e0bfea1b66d",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
