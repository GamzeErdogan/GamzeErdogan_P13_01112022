import {USER_PROFILE} from '../types'

const initialState= {
    userProfileInfo : [],
}

const userProfileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case USER_PROFILE:
            return {
                ...state,
                userProfileInfo : action.payload,
            }
           
    
        default:
            return state;
    }
}

export default userProfileReducer;