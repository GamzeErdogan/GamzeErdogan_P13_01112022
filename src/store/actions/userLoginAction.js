import { LOGGING_USER,USERS_ERROR} from "../types";

export const handleConnectAndGetToken =
    (userMail, userPassword) => async (dispatch) => {
        const loginUrl = "http://localhost:3001/api/v1/user/login";

        fetch(loginUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userMail,
                password: userPassword,
            }),
        })
            ?.then((response) => response.json())
            ?.then((data) => {
                if (data?.body?.token) {
                    dispatch({
                        type: LOGGING_USER,
                        payload: data.body.token,
                    });
                } else {
                    dispatch({
                        type: USERS_ERROR,
                        payload: 'Wrong Username or Password'
                    })
                    console.log("error while logging");
                }
            });
    };
