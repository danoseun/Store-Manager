import db from '../db/index';
import {
  insertProduct, queryAllProducts, queryProductAdmin, updateProductQuery, deleteProductQuery
} from '../db/sql';

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
  static async createProduct(req, res) {
    const { id } = req.authData.payload;
    const {
      /* eslint-disable */
      userId, productName, description, category, imageurl, quantity, unitPrice
    } = req.body;
    const values = [
      id,
      productName,
      description,
      category,
      imageurl,
      quantity,
      unitPrice
    ];
    try {
      const result = await db.query(insertProduct, values);
      const newProduct = result.rows[0];
      return res.status(201).json({
        message: 'Product record successfully created',
        newProduct
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Fail',
        message: error.message
      });
    }
  }
  
  /**
   * Get all products in the store
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON object representing success message
   * @memberof ProductController
   */
  static async getAllProducts(req, res) {
    try {
      const { rows } = await db.query(queryAllProducts);
      return res.status(200).json({
        message: 'All products successfully served',
        rows
      });
    } catch(error) {
      const { message } = error;
      return res.status(500).json({
        status: 'Fail',
        message
      });
    }
     
  }

  /**
   * Get one product by its ID
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} {object} JSON object representing success message
   * @memberof ProductController
   */
  static getOneProduct(req, res) {
    const { foundProduct } = req.body;
    return res.status(200).json({
      message: 'Product successfully found',
      foundProduct
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
  static async updateProduct(req, res) {
    const { id } = req.authData.payload;
    const {
      description, category, imageurl, quantity, unitPrice
    } = req.body;


    try {
      const { rows } = await db.query(queryProductAdmin, [req.params.productId, id]);
      if (!rows[0]) {
        return res.status(404).json({
          status: 'Fail',
          message: 'The product is not available'
        });
      }
      const values = [
        description || rows[0].description,
        category || rows[0].category,
        imageurl || rows[0].imageurl,
        quantity || rows[0].quantity,
        unitPrice || rows[0].unitPrice,
        req.params.productId,
        id
      ];

      const response = await db.query(updateProductQuery, values);
      const updatedProduct = response.rows[0];
      return res.status(200).json({
        message: 'Update was succesfull',
        updatedProduct
      });

    } catch (error) {
      const { message } = error;
      return res.status(500).json({
        status: 'Fail',
        message
      });
    }
  }

  /**
   * Delete product record
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - JSON object representing success
   * @memberof ProductController
   */
  static async deleteProduct(req, res) {
    try {
      const { rowCount } = await db.query(deleteProductQuery, [req.params.productId]);
      if (rowCount > 0) {
        return res.status(200).json({
          message: 'Product deleted successfully'
        });
      }
      return res.status(404).json({
        message: 'Product does not exist'
      });
    } catch (error) {
      const { message } = error;
      res.status(500).json({
        status: 'Fail',
        message
      });
    }
  }
}

export default ProductController;

// Abstract params id checker function





// try {
    //   const result = await db.query(updateProductQuery, values);
    //   console.log('WORK-A', result.rows[0].description);
    //   console.log('>>>>', result);
    //   console.log('WORK-B', result.rows[0].userId);
    //   if (result.rowCount === 1) {
    //     if (result.rows[0].userId === id) {
    //       console.log('WORK', result.rows[0].userId , id)
    //       let updatedProduct = result.rows[0];
    //       return res.status(200).json({
    //         message: 'Product updated successfully',
    //         updatedProduct
    //       });
    //     } return res.status(401).json({message: 'Iro o'})
    //   } return res.status(404).json({message: 'Product no dey'})
    // } catch(error) {
    //   const { message } = error;
    //   return res.status(500).send({
    //     status: 'Fail',
    //     message
    //   });
    // }