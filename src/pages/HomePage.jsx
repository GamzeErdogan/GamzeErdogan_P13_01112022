import React from "react";
import FeaturesHomePage from "../components/FeaturesHomePage";
import "../style/styleOfHomePage.css";
import iconChat from "../assets/img/iconChat.png";
import iconMoney from "../assets/img/iconMoney.png";
import iconSecurity from "../assets/img/iconSecurity.png";

const HomePage = () => {
    return (
        <div>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className="features">
                <FeaturesHomePage
                    url={iconChat}
                    title={"You are our #1 priority"}
                    text={
                        "Need to talk to a representative? You can get in touch through" +
                        "our 24/7 chat or through a phone call in less than 5 minutes"
                    }
                />
                <FeaturesHomePage
                    url={iconMoney}
                    title={"More savings means higher rates"}
                    text={
                        " The more you save with us, the higher your interest rate will be!"
                    }
                />
                <FeaturesHomePage
                    url={iconSecurity}
                    title={"Security you can trust"}
                    text={
                        "We use top of the line encryption to make sure your data and money" +
                        "is always safe."
                    }
                />
            </section>
        </div>
    );
};

export default HomePage;
