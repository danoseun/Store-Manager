import { products } from '../dummyDb';

/**
 * Class representing ProductController
 * @class ProductController
 */
class ProductController {
  /**
     * Create new product record
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON representing success message
     * @memberof ProductController
     */
  static createProduct(req, res) {
    const {
      productname, description, category, imageurl, quantity, unitprice
    } = req.body;
    const id = products[products.length - 1].id + 1;
    const today = new Date();
    const newProduct = {
      id,
      productname,
      description,
      category,
      imageurl,
      quantity,
      unitprice,
      today
    };
    products.push(newProduct);
    return res.status(201).json({
      newProduct,
      message: 'Product record successfully created'
    });
  }

  /**
   * Get all products in the store
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON object representing success message
   * @memberof ProductController
   */
  static getAll(req, res) {
    return res.status(200).json({
      products,
      message: 'All products successfully served'
    });
  }

  /**
   * Get one product by its ID
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} {object} JSON object representing success message
   * @memberof ProductController
   */
  static getOne(req, res) {
    const { foundProduct } = req.body;
    return res.status(200).json({
      foundProduct,
      message: 'Product successfully found'
    });
  }

  /**
   * Modify product record
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - JSON object representing success
   * @memberof ProductController
   */
  static updateProduct(req, res) {
    const { foundProduct } = req.body;
    const {
      productname, description, category, imageurl, quantity, unitprice
    } = req.body;

    foundProduct.productname = productname;
    foundProduct.description = description;
    foundProduct.category = category;
    foundProduct.imageurl = imageurl;
    foundProduct.quantity = quantity;
    foundProduct.unitprice = unitprice;
    return res.status(205).json({
      foundProduct,
      message: 'product record updated successfully'
    });
  }
}

export default ProductController;
