import React from "react";
import "App.css";
import ServiceCard from "../src/components/ServiceCard";

function App() {
    const services = [
        { titre: 'Demande de carte nationnalite', description: 'Faites votre demande de carte d"identite en ligne.' },
        { titre: 'Acces aux soins', description: 'Obtener une orientation vers les centres medicaux proches.' },
    ]

    return (
        <div className="container">
            <header>
                <h1>e-TCHAD SERVICE</h1>
                <p>Une plateforme au service de la population tchadiemnne 🇹🇩</p>
            </header>

            <section className="services">
                {services.map((service, index) => (
                    <ServiceCard key={index} titre={service.titre} description={service.description} />
                ))}
            </section>
        </div>
    );
}

export default App;