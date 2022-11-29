import React from "react";
import "../style/styleOfErrorPage.css";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';

const ErrorPage = () => {
    const location = useLocation();
    console.log(location.state)
    return (
        <div className="error">
            <h1 className="errorTitle">404</h1>
            <p className="errorText">
                {location?.state ? location?.state :'La page que vous avez cherchez n`existe pas'}
            </p>
            <Link to="/" className="link">
                <p>Retournez a la page d`accueille</p>
            </Link>
        </div>
    );
};

export default ErrorPage;
