import axios from 'axios'
import * as types from './actionTypes'

export const actFetchPostRequest = (params)=>{
  return(dispatch) =>{
        axios.get(`https://5f831a256b97440016f4e334.mockapi.io/api/${params}`)
          .then(res => {
              console.log("----call server");
              dispatch(actFetchDataProducts(res.data))
          })
          .catch(err => console.log(err))
  }
}
export const actFetchDataProducts = (products)=>{
  return{
      type: types.FETCH_DATA_PRODUCTS,
      products
  }
}

export const actAddToCart = (item) =>{
  return{
      type: types.ADD_TO_CART,
      item
  }
}
export const actUpdateQuantityCart = (cart, quantity)=>{
  return{
      type: types.UPDATE_QUANTITY_TO_CART,
      cart,
      quantity
  }
}
export const actDeleteCart = (cart)=>{
  return{
      type: types.REMOVE_TO_CART,
      cart
  }
}
