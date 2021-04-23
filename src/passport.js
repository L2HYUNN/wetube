import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import { facebookLoginCallback, githubLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

const URL = process.env.PRODUCTION ? "https://protected-woodland-11137.herokuapp.com" : "http://localhost:4000";


passport.use(User.createStrategy());

passport.use(
    new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `${URL}${routes.githubCallback}`
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