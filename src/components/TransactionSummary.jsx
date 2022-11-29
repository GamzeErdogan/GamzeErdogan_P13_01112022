import React from "react";
import '../style/styleOfProfilePage.css'
import { useNavigate } from "react-router-dom";

const TransactionSummary = (props) => {
    let navigate = useNavigate();
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.title}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button onClick={()=>navigate('/profile/transaction')} className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};

export default TransactionSummary;
