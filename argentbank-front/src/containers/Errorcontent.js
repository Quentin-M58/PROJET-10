import React from "react";
import { Link } from "react-router-dom";

export default function Errorcontent() {
        return (
                <main className="Errorcontent">
                        <h1>Erreur 404</h1>
                        <h2>La page demandée n'existe pas... </h2>
                        <h3>Veuillez revenir à la page d'accueil</h3>
                        <Link to="/acceuil">Retour à la page d'accueil</Link>
                </main>
        );
}