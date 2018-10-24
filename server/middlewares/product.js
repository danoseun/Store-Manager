import { products } from '../dummyDb';

/**
 * Class representing Product Validations
 * @class ProductValidator
 */
class ProductValidator {
  /**
     * Get a specific product
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {function} next - Calls the next function
     * @returns {object} JSON representing the failure message
     * @memberof ProductValidator
     */
  static getOneProduct(req, res, next) {
    const { productId } = req.params;
    if (!Number(productId)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Oops!, Invalid URL'
      });
    }
    const foundProduct = products.find(product => product.id === Number(productId));
    if (!foundProduct) {
      return res.status(404).json({
        status: 'Fail',
        message: 'This product does not exist'
      });
    }
    req.body.foundProduct = foundProduct;
    return next();
  }

  /**
     * Check product input
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {function} next - Calls the next function
     * @returns {object} JSON representing the failure message
     * @memberof ProductValidator
   */
  static productInputChecker(req, res, next) {
    /* eslint-disable prefer-const */
    let {
      productName, description, category, imageurl, quantity, unitPrice, userId
    } = req.body;
    // productName
    if (productName === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Product name cannot be undefined'
      });
    }
    if (typeof productName !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Product name should be a string'
      });
    }
    if (productName === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Product should have a name'
      });
    }
    productName = productName.toLowerCase().trim();
    if (productName.length < 2 || productName > 50) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Ensure that the product name is between 2 to 50 characters long'
      });
    }
    const characterChecker = /^[A-Za-z ]+$/;
    if (!characterChecker.test(productName)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Product name should contain alpahbets only'
      });
    }
    const foundProductName = products.find(product => product.productName === productName);
    if (foundProductName) {
      return res.status(409).json({
        status: 'Fail',
        message: 'Product name already exists, consider updating it instead'
      });
    }

    // Description
    if (description === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Description is required'
      });
    }
    if (typeof description !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Description should be a string'
      });
    }
    if (description === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Type a brief description for the product'
      });
    }

    description = description.toLowerCase().trim();
    if (description.length < 10 || description.length > 100) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Description should be between 10 and 100 characters for brevity sake'
      });
    }
    if (!characterChecker.test(description)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Description should contain characters only'
      });
    }

    // Category
    if (category === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category cannot be undefined'
      });
    }
    if (typeof category !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category should be a string'
      });
    }
    if (category === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category cannot be empty'
      });
    }

    category = category.toLowerCase().trim();
    const characterCheckerr = /^[A-Za-z]+$/;
    if (!characterCheckerr.test(category)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category should contain alphabets only'
      });
    }
    if (category.length < 3 || category.length > 15) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category should be between 3 and 15 characters long'
      });
    }
    // ImageUrl
    if (imageurl === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Image URL cannot be undefined'
      });
    }
    if (typeof imageurl !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Image URL should be a string'
      });
    }
    if (imageurl === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Enter a valid url for this product'
      });
    }

    // Validate for valid image extensions jpeg, gif, png and gif(database)

    // Quantity
    if (quantity === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Quantity is undefined. Input a positive integer greater than zero and of length 1 to 4'
      });
    }
    if (typeof quantity !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Quantity should be a string. Input a positive integer greater than zero and of length 1 to 4'
      });
    }
    if (quantity === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Quantity cannot be empty. Input a positive integer greater than zero and of length 1 to 4'
      });
    }

    quantity = quantity.trim();
    if (quantity.length < 1 || quantity.length > 4) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid quantity length. Input a positive integer greater than zero and of length 1 to 4'
      });
    }
    if (quantity < 1) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid quantity. Input a positive integer greater than zero and of length 1 to 4'
      });
    }
    const validQuantityCharacter = /^[0-9]+$/;
    if (!validQuantityCharacter.test(quantity)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid quantity character detected. Input a positive integer greater than zero and of length 1 to 4'
      });
    }

    // Price
    if (unitPrice === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Price is undefined. Input a positive integer greater than zero but less than length of 10'
      });
    }
    if (typeof unitPrice !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'unitprice should be a string. Input a positive integer greater than zero but less than length of 10'
      });
    }
    if (unitPrice === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'unitprice cannot empty. Input a positive integer greater than zero but less than length of 10'
      });
    }

    unitPrice = unitPrice.trim();
    if (unitPrice < 1) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid unitprice. Input positive a integer greater than zero but less than length of 10'
      });
    }
    const validPriceChecker = /^([0-9]){1,6}$/;
    if (!validPriceChecker.test(unitPrice)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid price character detected. Input positive integer greater than zero but less than length of 10'
      });
    }

    // UserId validations
    if (userId === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'UserId cannot be undefined'
      });
    }

    if (userId === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'UserId cannot be empty'
      });
    }
    let value;
    if (typeof userId === 'string') {
      value = Number(userId);
      if (Number.isNaN(value)) {
        return res.status(400).json({
          status: 'Fail',
          message: 'UserId should be a valid number'
        });
      }
    }
    req.body.productName = productName;
    req.body.description = description;
    req.body.category = category;
    req.body.imageurl = imageurl;
    req.body.quantity = quantity;
    req.body.unitPrice = unitPrice;
    req.body.userId = value;
    return next();
  }
}
export default ProductValidator;
