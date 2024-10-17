import React from "react";
import Feature from "../components/Feature"
import Features from "../data/features.json"

export default function Home() {
        return (
                <div className="home">
                        <main>
                                <div className="hero">
                                        <section className="hero-content">
                                                <h2 className="sr-only">Promoted Content</h2>
                                                <p className="subtitle">No fees.</p>
                                                <p className="subtitle">No minimum deposit.</p>
                                                <p className="subtitle">High interest rates.</p>
                                                <p className="text">Open a savings account with Argent Bank today!</p>
                                        </section>
                                </div>
                                <section className="features">
                                        <h2 className="sr-only">Features</h2>
                                        {Features.map((info) => {
                                                return (
                                                        <Feature
                                                                icon={info.icon}
                                                                altinfo={info.alt}
                                                                title={info.title }
                                                                description={info.description}
                                                                key={info.id }
                                                        />
                                                )
                                        })}
                                </section>
                        </main>
                </div>
        );
 }