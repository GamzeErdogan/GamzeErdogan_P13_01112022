import {USER_PROFILE} from '../types'

const initialState= {
    userProfileInfo : [],
    // loading:true,
    
}

const userProfileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case USER_PROFILE:
            return {
                ...state,
                userProfileInfo : action.payload,
                // loading:false
            }
           
    
        default:
            return state;
    }
}

export default userProfileReducer;