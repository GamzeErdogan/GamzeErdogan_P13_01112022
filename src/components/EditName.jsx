import React from "react";
import { useSelector } from "react-redux";

const EditName = () => {
    const getUserInfos = useSelector(
        (state) => state?.userProfileReducer?.userProfileInfo
    );
    return (
        <div>
            <div>
                <input type="text" placeholder={getUserInfos.firstName} />
                <input type="text" placeholder={getUserInfos.lastName} />
            </div>
            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    );
};

export default EditName;
