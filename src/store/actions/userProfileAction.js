import { USER_PROFILE } from "../types";

export const getProfileInfos = (userToken) => async (dispatch) =>{
    const loginUrl = "http://localhost:3001/api/v1/user/profile";

    fetch(loginUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken,

        }
    })
        ?.then((response) => response.json())
        ?.then((data) => {
            if (data) {
                dispatch({
                    type: USER_PROFILE,
                    payload: data.body
                });
            } else {
                console.log("error while logging");
            }
        });

}