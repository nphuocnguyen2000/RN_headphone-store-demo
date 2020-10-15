import axios from 'axios'
export const loginAction = ( payload ) => {
  return {
    type: 'LOGIN',
    payload
  }
}

export const actFetchPostRequest = (params)=>{
  return(dispatch) =>{
        axios.get(`https://5e8fc291fe7f2a00165ef5af.mockapi.io/api/${params}`)
          .then(res => {
              dispatch(actFetchDataPost(res.data))
          })
          .catch(err => console.log(err))
  }
}
export const actFetchDataPost = (posts)=>{
  return{
      type: 'FETCH_DATA_SHOP',
      posts
  }
}