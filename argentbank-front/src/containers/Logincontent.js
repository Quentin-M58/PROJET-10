import React from "react";
import Form from "../components/Form.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Userinfo() {
        return (
                <main className="main bg-dark">
                        <section className="sign-in-content">
                                <FontAwesomeIcon icon="fa fa-user-circle sign-in-icon" className="sign-in-icon" />
                                <h1>Sign In</h1>
                                <Form />
                        </section>
                </main>
        );
}