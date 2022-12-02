import React, { useState } from "react";
import "../style/styleOfSignInPage.css";
import "../style/styleOfErrorMsg.css";
import { useDispatch, useSelector } from "react-redux";
import { handleConnectAndGetToken } from "../store/actions/userLoginAction";
import { getProfileInfos } from "../store/actions/userProfileAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const LogInPage = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    //---all React states here-------
    const [getUserMail, setUserMail] = useState(
        localStorage.getItem("userMail")
    );
    const [getUserPassword, setUserPassword] = useState(
        localStorage.getItem("userPassword")
    );
    let [rememberMe, setRememberMe] = useState(
        localStorage.getItem("rememberMe")
    );
    const [errorMessage, setErrorMessage] = useState("");

    let errorMessageRedux = useSelector(
        (state) => state?.userLoginReducer.errorMessage
    );

    //---all Redux states---------
    let isLogging = useSelector((state) => state?.userLoginReducer?.isLogging);
    let userToken = useSelector(
        (state) => state?.userLoginReducer?.userLogToken
    );

    async function handleConnect() {
        dispatch(handleConnectAndGetToken(getUserMail, getUserPassword));
    }

    useEffect(() => {
        if (errorMessage != null) {
            setErrorMessage(errorMessageRedux);
        }

       

        if (userToken.length) {
            dispatch(getProfileInfos(userToken));
        }

        if (isLogging) {
            if (rememberMe && isLogging) {
                localStorage.setItem("userMail", getUserMail);
                localStorage.setItem("userPassword", getUserPassword);
                localStorage.setItem("rememberMe", rememberMe);
            }
            navigate("/profile");
        }
    }, [
        errorMessage,
        errorMessageRedux,
        isLogging,
        getUserMail,
        getUserPassword,
        rememberMe,
        navigate,
        dispatch,
        userToken,
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        handleConnect();
    };
   
    return (
        <main
            className="bg-dark"
            style={{ height: errorMessage ? "550px" : "485px" }}
        >
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="mail"
                            id="username"
                            value={getUserMail}
                            placeholder="Enter e-mail"
                            onChange={(e) => setUserMail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={getUserPassword}
                            placeholder={"Enter password"}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={!!rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    {errorMessage ? (
                        <div className="errorMsg">{errorMessage}</div>
                    ) : null}

                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
};

export default LogInPage;
