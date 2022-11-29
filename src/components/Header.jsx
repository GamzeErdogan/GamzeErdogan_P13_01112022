import React from "react";
import argentBankLogo from "../assets/img/argentBankLogo.png";
import "../style/styleOfHeader.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    //Redux states here
    let isLogging = useSelector((state) => state?.userLoginReducer?.isLogging);
    const getUserInfos = useSelector(
        (state) => state?.userProfileReducer?.userProfileInfo
    );
    let updatedProfile = useSelector(
        (state) => state?.userEditProfileReducer?.userUpdateProfile?.firstName
    );

    return (
        <nav className="headerNav">
            <Link to="/">
                <img
                    className="logoNav"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
            </Link>
            {isLogging ? (
                <div>
                    <Link to="/profile" className="main-nav-item">
                        <i class="fa fa-user-circle"></i>
                        {updatedProfile?.length
                            ? updatedProfile
                            : getUserInfos.firstName}
                    </Link>
                    <Link
                        to="/"
                        className="main-nav-item"
                        onClick={() => dispatch((isLogging = false))}
                    >
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            ) : (
                <Link to="/sign-in" className="itemOfNav">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </Link>
            )}
        </nav>
    );
};

export default Header;
