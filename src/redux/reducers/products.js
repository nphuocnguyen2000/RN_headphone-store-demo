import * as type from '../actions/actionTypes'

var inititalState = []

const myReducers = (state = inititalState, action)=>{
    switch(action.type){
        case type.FETCH_DATA_PRODUCTS:
            state = action.products   
            return [...state]
        default: 
            return [...state]
    }
}

export default myReducers