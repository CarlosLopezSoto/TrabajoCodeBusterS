const functions = require('firebase-functions');

const express = require("express");

const app = express();

// Esta es la versión que se debe actualizar al realizar cambios
// (ya sabemos que esto no debería ser así...)
const currentVersion = "v0.5.1";

const Router = require("./router");;

const router = new Router(app,currentVersion);

router.configureRoutes();

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
