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
      productname, description, category, imageurl, quantity, unitprice, UserId
    } = req.body;
    // productName
    if (productname === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Product name cannot be undefined',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (typeof productname !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'product name should be a string',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (productname === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Product should have a name',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    
    productname = productname.toLowerCase().trim();
    if (productname.length < 2 || productname > 50) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Ensure that the product name is between 2 to 50 characters long',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    const characterChecker = /^[A-Za-z ]+$/;
    if (!characterChecker.test(productname)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Product name should contain alpahbets only',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    const foundProductName = products.find(product => product.productname === productname);
    if (foundProductName) {
      return res.status(409).json({
        status: 'Fail',
        message: 'Product name already exists, consider updating it instead',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }

    // Description
    if (description === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Description is required',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (typeof description !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Description should be a string',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (description === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Type a brief description for the product',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    
    description = description.toLowerCase().trim();
    if (description.length < 10 || description.length > 100) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Description should be between 10 and 100 characters for brevity sake',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (!characterChecker.test(description)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Description should contain characters only',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }

    // Category
    if (category === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category cannot be undefined',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (typeof category !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category should be a string',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (category === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category cannot be empty',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    
    category = category.toLowerCase().trim();
    const characterCheckerr = /^[A-Za-z]+$/;
    if (!characterCheckerr.test(category)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category should contain alphabets only',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (category.length < 3 || category.length > 15) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Category should be between 3 and 15 characters long',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    // ImageUrl
    if (imageurl === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Image URL cannot be undefined',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (typeof imageurl !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Image URL should be a string',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", "quantity: "number", "unitprice": "number"}'
      });
    }
    if (imageurl === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Enter avalid url for this product',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    
    // Validate for valid image extensions jpeg, gif, png and gif(database)

    // Quantity
    if (quantity === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Quantity is undefined. Input a positive integer greater than zero and of length 1 to 4',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (typeof quantity !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Quantity should be a string. Input a positive integer greater than zero and of length 1 to 4',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (quantity === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Quantity cannot be empty. Input a positive integer greater than zero and of length 1 to 4',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    
    quantity = quantity.trim();
    if (quantity.length < 1 || quantity.length > 4) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid quantity length. Input a positive integer greater than zero and of length 1 to 4',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (quantity < 1) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid quantity. Input a positive integer greater than zero and of length 1 to 4',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    const validQuantityCharacter = /^[0-9]+$/;
    if (!validQuantityCharacter.test(quantity)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid quantity character detected. Input a positive integer greater than zero and of length 1 to 4',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }

    // Price
    if (unitprice === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Price is undefined. Input a positive integer greater than zero but less than length of 10',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (typeof unitprice !== 'string') {
      return res.status(400).json({
        status: 'Fail',
        message: 'unitprice should be a string. Input a positive integer greater than zero but less than length of 10',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    if (unitprice === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'unitprice cannot empty. Input a positive integer greater than zero but less than length of 10',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    
    unitprice = unitprice.trim();
    if (unitprice < 1) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid unitprice. Input positive a integer greater than zero but less than length of 10',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    const validPriceChecker = /^([0-9]){1,6}$/;
    if (!validPriceChecker.test(unitprice)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Invalid price character detected. Input positive integer greater than zero but less than length of 10',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }

    // UserId validations
    if (UserId === undefined) {
      return res.status(400).json({
        status: 'Fail',
        message: 'UserId cannot be undefined',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }

    if (UserId === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'UserId cannot be empty',
        sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
      });
    }
    let value;
    if (typeof UserId === 'string') {
      value = Number(UserId);
      if (Number.isNaN(value)) {
        return res.status(400).json({
          status: 'Fail',
          message: 'UserId should be a valid number',
          sampleCredentials: '{"productname": "string" , "description": "string", "category": "string", "imageurl": "string", quantity: "number", "unitprice": "number"}'
        });
      }
    }
    req.body.productname = productname;
    req.body.description = description;
    req.body.category = category;
    req.body.imageurl = imageurl;
    req.body.quantity = quantity;
    req.body.unitprice = unitprice;
    req.body.UserId = value;
    return next();
  }
}
export default ProductValidator;
