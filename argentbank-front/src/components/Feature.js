import React from "react";

export default function Feature({ icon, title, description }) {
        return (
                <div className="feature-item">
                        <img src={require(`../images/icon-${icon}.png`)}
                                alt={icon}
                                className="feature-icon" />
                        <h3 className="feature-item-title">{title}</h3>
                        <p>{description}</p>
                </div>
        );
}