import pkg from 'koa-router';
const { pkg: Router } = pkg;
import { getError , postError, deleteError, putError} from "../../controllers/error.js";

//router
let error = new Router();

error.get("*", getError);
error.post("*", postError);
error.delete("*", deleteError);
error.put("*", putError);


export default error; 