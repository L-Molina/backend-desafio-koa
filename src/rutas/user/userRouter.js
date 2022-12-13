import pkg from 'koa-router';
const { pkg: Router } = pkg;
import { getUsuario } from "../../controllers/user.js";

let user = new Router();

user.get("/", getUsuario);

export default user;