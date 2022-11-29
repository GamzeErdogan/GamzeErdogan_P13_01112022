import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionPage = () => {
    const navigate = useNavigate();

    setTimeout(() => {
      navigate(-1);
    }, 2000);
  
    return (
      <div>
        <h1>Page bientôt disponible...</h1>
      </div>
    );
};

export default TransactionPage;
