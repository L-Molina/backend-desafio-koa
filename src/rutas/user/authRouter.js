import pkg from 'koa-router';
const { pkg: Router } = pkg;
import { getLogin, postLogin } from "../../controllers/login.js";
import { getLogError } from "../../controllers/logError.js";
import { getResgister, postRegister } from "../../controllers/register.js";
import { getLogout } from "../../controllers/logout.js";

import upload from '../../middleware/multer.js';

let auth = new Router();

import passport from "../../middleware/passport.js";

auth.get("/login", getLogin);
auth.post("/login", passport.authenticate("local", { failureRedirect: "/auth/login-error" }), postLogin);
auth.get("/login-error", getLogError);
auth.get("/logout", getLogout);
auth.get("/register", getResgister);
auth.post("/register", upload.single("myFile"), postRegister);

export default auth;