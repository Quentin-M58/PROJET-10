import React, { useState } from "react";
import Input from "./Input.js"
import Updatename from "../tools/Updatename.js"
import { useDispatch } from 'react-redux';

export default function Name({ firstname, lastname, username }) {
        const [display, setDisplay] = useState(false);
        const [profilname, setprofilname] = useState('');
        const dispatch = useDispatch();
        const Cancelfunc = () => {
                setDisplay(false)
        }
        const NameSubmit = async (event) => {
                event.preventDefault();
                await Updatename(profilname, dispatch, setDisplay)
        }
        return (
                <div className="header">
                        {!display ?
                                <div>
                                        <h1>Welcome back<br />{firstname} {lastname}!</h1>
                                        <button className="edit-button" onClick={() => setDisplay(true)}>Edit Name</button>
                                </div>
                                :
                                <div className="editor">
                                        <h1>Edit User info</h1>
                                        <form onSubmit={NameSubmit}>
                                                <div className="input" >
                                                        <Input
                                                                id="User name:"
                                                                type="text"
                                                                value={profilname || username || ''}
                                                                setter={setprofilname}
                                                                maxLength="15"
                                                                pattern="[a-zA-Z0-9\s]{4,15}"/>
                                                        <Input
                                                                id="First name:"
                                                                defaultValue={firstname}
                                                                disabled />
                                                        <Input
                                                                id="Last name:"
                                                                defaultValue={lastname}
                                                                disabled />
                                                </div>
                                                <div className="btn">
                                                        <button className="edit-button" >Save</button>
                                                        <button className="edit-button" onClick={Cancelfunc}>Cancel</button>
                                                </div>
                                        </form>
                                </div>}
                </div>
        );
}
