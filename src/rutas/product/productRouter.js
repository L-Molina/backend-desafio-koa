import pkg from 'koa-router';
const { pkg: Router } = pkg;
import { getProducts, postProduct } from "../../controllers/products.js";

//router
let products = new Router();

products.get("/", getProducts);
products.post("/", postProduct);

export default products;