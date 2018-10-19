import UserValidator from './user';
import VerifyRole from './auth';
import ProductValidator from './product';

const { getOneProduct, productInputChecker } = ProductValidator;


export default {
  UserValidator,
  VerifyRole,
  getOneProduct,
  productInputChecker
};
