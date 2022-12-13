import pkg from 'koa-router';
const { pkg: Router } = pkg;
import { getAllInfo } from "../../controllers/info.js";

let info = new Router();

info.get("/", getAllInfo);

export default info;