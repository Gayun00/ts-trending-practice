"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApp = void 0;
const app_1 = require("firebase/app");
// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    // authDomain: 'PROJECT_ID.firebaseapp.com',
    // The value of `databaseURL` depends on the location of the database
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    // storageBucket: 'PROJECT_ID.appspot.com',
    // messagingSenderId: 'SENDER_ID',
    appId: process.env.APP_ID,
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    // measurementId: 'G-MEASUREMENT_ID',
};
console.log(process.env.API_KEY);
exports.firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
// Get a reference to the database service
