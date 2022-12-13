import pkg from 'koa-router';
const { pkg: Router } = pkg;
import { getProductsList, getProductsListById, postProductsList, updateProductsList, deleteProductsList } from '../../controllers/productsList.js';

//router
let productsList = new Router();

/* get the products */
productsList.get("/", getProductsList);

/* get by ID */
productsList.get("/:id", getProductsListById);

/* post Product */
productsList.post("/", postProductsList);

/* update Product */
productsList.put("/:id", updateProductsList);

/* delete Product */
productsList.delete("/:id", deleteProductsList);

export default productsList;