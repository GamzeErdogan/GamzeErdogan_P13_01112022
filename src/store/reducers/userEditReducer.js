import { EDIT_USERNAME} from "../types";

const initialState = {
    userUpdateProfile: [],
    isUserUpdatedName:false,
};

function userEditProfileReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_USERNAME:
            return {
                ...state,
                userUpdateProfile: action.payload,
                isUserUpdatedName:true
            };
        
        default:
            return state;
    }
}
export default userEditProfileReducer;
