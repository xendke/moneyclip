import firebase from 'firebase/app';
import 'firebase/database';
import apiKey from './apiKey';

var config = {
	apiKey,
	authDomain: "moneyclip-io.firebaseapp.com",
	databaseURL: "https://moneyclip-io.firebaseio.com",
	projectId: "moneyclip-io",
	storageBucket: "moneyclip-io.appspot.com",
	messagingSenderId: "914061734683"
};
firebase.initializeApp(config);

const database = firebase.database();

export default database;