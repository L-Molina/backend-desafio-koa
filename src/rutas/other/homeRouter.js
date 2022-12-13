import pkg from 'koa-router';
const { pkg: Router } = pkg;
import auth from '../../middleware/auth.js';
import { getHome } from "../../controllers/home.js";
let home = new Router();

home.get("/", auth, getHome);

export default home