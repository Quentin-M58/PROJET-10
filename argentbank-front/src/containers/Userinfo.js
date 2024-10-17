import React from "react";
import User from "../components/User.js";
import Account from "../components/Account.js";
import Transaction from "../data/transaction.json"

export default function Userinfo() {
        return (
                <main className="main bg-dark">
                        <User />
                        <h2 className="sr-only">Accounts</h2>
                        {Transaction.map((info) => { 
                                return (
                                        <Account
                                                title={`Argent Bank ${info.nom}`}
                                                amount={`$${info.price}`}
                                                description={`${info.description} Balance`}
                                                key={info.id}
                                        />
                                )
                        })}
                </main>
        );
}