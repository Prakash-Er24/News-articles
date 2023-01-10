const initialValue = {}
const userReducer = (state=initialValue,action) => {
    switch(action.type){
        case 'LOGIN':{
            return {...action.payload}
        }
        case 'LOGOUT':{
            return initialValue
        }
        default:{
            return state
        }
    }
}

export default userReducer