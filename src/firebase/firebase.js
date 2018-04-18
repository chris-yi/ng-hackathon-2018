// src/firebase.js
import firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyDmnZY75cJggm9os5nShb_DvYoybd-JrMo',
	authDomain: 'react-nation.firebaseapp.com',
	databaseURL: 'https://react-nation.firebaseio.com',
	projectId: 'react-nation',
	storageBucket: 'react-nation.appspot.com',
	messagingSenderId: '803836214952',
};
firebase.initializeApp(config);
export default firebase;