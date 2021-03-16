import express from "express";
// const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; 
import { userRouter } from "./router";

const app = express();

// function handleListening(){
//     console.log(`Listening on http://localhost:${PORT}`);
// }

const handleHome = (req, res) => res.send("Hello from mymy home");

// function handleHome(req, res) {
//     res.send("Hello from home");
// }

const handleProfile = (req, res) => res.send("You are on my profile");

// function handleProfile(req, res) {
//     res.send("You are on my profile");
// }

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("dev"));


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;


