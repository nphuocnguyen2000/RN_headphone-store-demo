var inititalState = []

const myReducers = (state = inititalState, action)=>{
    switch(action.type){
        case 'FETCH_DATA_SHOP':
            state = action.posts   
            return [...state]
        default: 
            return [...state]
    }
}

export default myReducers