import { LOGGING_USER,USERS_ERROR} from "../types";

const initialState = {
    userLogToken: [],
    loading: true,
    isLogging:false,
    error:false,
    errorMessage:''
};

function userLoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGGING_USER:
            return {
                ...state,
                userLogToken: action.payload,
                loading: false,
                isLogging:true,
                error:false
            };
            case USERS_ERROR:
                return {
                    ...state,
                    errorMessage: action.payload,
                    loading: false,
                    isLogging:false,
                    error:true

                };
        
        default:
            return state;
    }
}
export default userLoginReducer;
