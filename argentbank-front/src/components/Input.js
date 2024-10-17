import React from "react";

export default function Input({ id, type, value, placeholder, setter, ...props }) {
        return (
                <div className="input-wrapper">
                        <label htmlFor={id}>{id}</label>
                        <input type={type}
                                id={id}
                                value={value}
                                placeholder={placeholder}
                                onChange={(e) => setter(e.target.value)}
                                minLength="4"
                                required
                                {...props}/>
                </div>
        );
}