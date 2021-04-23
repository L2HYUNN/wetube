import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import { facebookLoginCallback, githubLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";


passport.use(User.createStrategy());

passport.use(
    new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
    )
);

passport.use(
    new FacebookStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    // callbackURL: `http://localhost:4000${routes.facebookCallback}`
    callbackURL: `https://c13d5e9f74c2.ngrok.io${routes.facebookCallback}`,
    profileFields: ['id', 'displayName', 'photos', 'email'],
    scope: ['public_profile', "email"]
    },
    facebookLoginCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());