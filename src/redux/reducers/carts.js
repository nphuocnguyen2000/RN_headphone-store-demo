import * as types from '../actions/actionTypes'
import {findIndex} from 'lodash'
var inititalState = [];

const myReducers = (state = inititalState, action)=>{
    switch(action.type){
        case types.ADD_TO_CART:
           
            var indexAddToCart = findIndex(state, (state)=>{
                return state.id === action.item.id
            })
         
            if(indexAddToCart !== -1){
                state[indexAddToCart].quantity += 1
            }
            else{
                state.push(action.item)
            }
            return [...state]
        case types.UPDATE_QUANTITY_TO_CART:
        
            var indexUpdateCart = findIndex(state, (item)=>{
                return item.id === action.cart.id
            })
            if(index !== -1){
                state[indexUpdateCart].quantity = action.quantity    
            }  
            return [...state]
        case types.REMOVE_TO_CART:
        
            var indexRemoveCart = findIndex(state, (item) => {
                return item.id === action.cart.id
            })
            if(indexRemoveCart !== -1) {
                state.splice(indexUpdateCart, 1)
            }  
            return [...state]        
        default: 
            return [...state]
    }
}

export default myReducers