import { products } from '../dummyDb';

/**
 * Class representing Sale Helper
 * @class SaleHelper
 */
class SaleHelper {
  /**
     *
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {function} next - Calls the next function
     * @returns {object} JSON representing the failure message
     * @memberof SaleHelper
     */
  static SalesHelper(req, res, next) {
    /* eslint-disable */
    let { UserId, items } = req.body;
    if (UserId === undefined || UserId === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'UserId should be supllied'
      });
    }
    let cart = [];
    let total = 0;
    items.forEach((value) => {
        const foundProduct = products.find((product) => {
            if (product.id === value.productId) {
                return product
            }
        });
        if (!foundProduct) {
            return res.status(404).json({
                status: 'Fail',
                message: 'Product not found'
            });
        }
        value.productName = foundProduct.productname;
        value.amount = Number(foundProduct.unitprice) * Number(value.quantity);

        total += value.amount;
        cart.push(({value}));
    });
    req.body.cart = cart;
    req.body.total = total;
    req.body.UserId = UserId;
    return next();
 }
}
export default SaleHelper;