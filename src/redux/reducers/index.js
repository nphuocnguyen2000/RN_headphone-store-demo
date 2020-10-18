import { combineReducers } from 'redux';
import products from './products';
import carts from './carts'
import infoUser from './auth'
export default combineReducers({
  products,
  carts,
  infoUser
});