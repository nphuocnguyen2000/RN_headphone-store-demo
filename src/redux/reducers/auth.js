import * as types from '../actions/actionTypes'
var inititalState = {
  userToken: null,
  infoUser: null,
  isSignedIn : true,
  isLoading: false
};

const myReducers = (state = inititalState, action)=>{
    switch(action.type){
        case types.HANDLE_LOGIN:
          return {
            ...state,
            infoUser: action.infoUser,
            userToken: action.infoUser.token,
            isSignedIn : true,
            isLoading: true
          }
        case types.HANDLE_LOGOUT:
          return {
            ...state,
            userToken: null,
            infoUser: null,
            isSignedIn : false,
            isLoading: false
          }   
        default: 
            return {...state}
    }
}

export default myReducers