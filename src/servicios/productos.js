import { productosDao } from "../containers/daos/index.js";

const getAllProducts = async () => {
  const products = await productosDao.list();
  return products;
}

const getProduct = async (id) => {
  const product = await productosDao.getById(id);
  return product;
}

const saveProduct = async (product) => {
  const newProduct = await productosDao.save(product);
  return newProduct;
}

const deleteProduct = async (id) => {
  const product = await productosDao.deleteById(id);
  return product;
}

const updateProduct = async (id, product) => {
  const newProduct = await productosDao.changeById(id, product);
  return newProduct;
}

export { getAllProducts, getProduct, saveProduct, deleteProduct, updateProduct };