import React, { useState } from "react";
import "../style/styleOfProfilePage.css";
import "../style/styleOfSignInPage.css";
import { useSelector, useDispatch } from "react-redux";
import { editProfileName } from "../store/actions/userEditAction";
import TransactionSummary from "../components/TransactionSummary";

export const accounts = [
    {
      id: "azerty47hg",
      name: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: "azerty48hg",
      name: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: "azerty49hg",
      name: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

const ProfilePage = () => {
    const dispatch = useDispatch();

    //Redux states here-----
    const getUserInfos = useSelector(
        (state) => state?.userProfileReducer?.userProfileInfo
    );
    let userToken = useSelector(
        (state) => state?.userLoginReducer?.userLogToken
    );
    let updatedProfile = useSelector(
        (state) => state?.userEditProfileReducer?.userUpdateProfile?.firstName
    );

    // React states here......
    const [isOpen, setIsOpen] = useState(false);
    const [editedName, setEditedName] = useState("");
    const [editedLastN, setEditedLastN] = useState("");

    const handleUpdateProfile = () => {
        dispatch(editProfileName(userToken, editedName, editedLastN));
        setIsOpen(false);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {updatedProfile ? updatedProfile : getUserInfos.firstName}!
                </h1>
                {isOpen ? (
                    <div>
                        <input
                            type="text"
                            style={{
                                width: "150px",
                                margin: "20px",
                                height: "30px",
                            }}
                            placeholder={getUserInfos.firstName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                        <input
                            type="text"
                            style={{ width: "150px", height: "30px" }}
                            placeholder={getUserInfos.lastName}
                            onChange={(e) => setEditedLastN(e.target.value)}
                        />

                        <div>
                            <button
                                onClick={handleUpdateProfile}
                                style={{
                                    width: "100px",
                                    margin: "20px",
                                    height: "30px",
                                }}
                            >
                                Save
                            </button>
                            <button
                                style={{ width: "100px", height: "30px" }}
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        className="edit-button"
                        onClick={() => setIsOpen(true)}
                    >
                        Edit Name
                    </button>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="transaction">
          {accounts.map((account) => {
            return (
              <TransactionSummary
                key={account.id}
                title={account.name}
                amount={account.amount}
                description={account.description}
              />
            );
          })}
        </section>
          
        </main>
    );
};

export default ProfilePage;
