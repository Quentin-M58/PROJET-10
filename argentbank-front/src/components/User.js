import React from "react";
import { useSelector } from "react-redux";
import Name from "./Name.js"


function User() {
        const userData = useSelector((state) => state.user.userData);
        return (
                <Name firstname={userData.firstname} lastname={userData.lastname} username={userData.username} />
        )
}

export default User