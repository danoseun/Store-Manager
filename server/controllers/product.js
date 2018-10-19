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
}

export default ProductController;
