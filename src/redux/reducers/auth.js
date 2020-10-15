import AsyncStorage from '@react-native-community/async-storage';
let initialState = {
    isLogin: false
}
    
const Login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      AsyncStorage.setItem('USER_TOKEN', 'nothing');
        return {
          ...state,
          isLogin : action.payload
        }; 
    default:
      return state;
  }
};

export default Login;