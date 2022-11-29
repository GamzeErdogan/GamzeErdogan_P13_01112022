import { EDIT_USERNAME } from "../types";

export const editProfileName = (userToken,userName,userLastName) => async (dispatch) =>{
    const loginUrl = "http://localhost:3001/api/v1/user/profile";

    fetch(loginUrl, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken,

        },
        body: JSON.stringify({
            firstName: userName,
            lastName: userLastName,
        }),
    })
        ?.then((response) => response.json())
        ?.then((data) => {
            if (data) {
                dispatch({
                    type: EDIT_USERNAME,
                    payload: data.body
                });
            } else {
                console.log("error while logging");
            }
        });

}