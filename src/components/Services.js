import React from 'react';

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h2>Onze Diensten</h2>
                <div className="service-grid">
                    <div className="service-card">
                        <h3>Website Ontwikkeling</h3>
                        <p>We ontwerpen en ontwikkelen responsieve, gebruiksvriendelijke en schaalbare websites op maat voor uw bedrijfsbehoeften. Van e-commerce platforms tot portfolio's, we verzorgen zowel front-end als back-end ontwikkeling.</p>
                        <p><strong>Belangrijkste Voordelen:</strong> Aangepaste ontwerpen, SEO-optimalisatie, mobiele responsiviteit, snelle laadtijden.</p>
                        <a href="#contact" className="cta-button">Start Uw Website Project</a>
                    </div>
                    <div className="service-card">
                        <h3>AI Agent Ontwikkeling</h3>
                        <p>We bouwen complexe AI-agenten om processen te automatiseren en echte problemen op te lossen, waardoor de efficiëntie in sectoren zoals gezondheidszorg, logistiek en meer wordt verbeterd.</p>
                        <p><strong>Belangrijkste Voordelen:</strong> Op maat gemaakte AI-oplossingen, machine learning expertise, naadloze integratie.</p>
                        <a href="#contact" className="cta-button">Ontdek AI Oplossingen</a>
                    </div>
                    <div className="service-card">
                        <h3>Aangepaste API Ontwikkeling</h3>
                        <p>Heeft u een specifieke API nodig? We creëren aangepaste API's om aan uw unieke vereisten te voldoen, waardoor naadloze gegevensuitwisseling en functionaliteit voor uw applicaties mogelijk wordt.</p>
                        <p><strong>Belangrijkste Voordelen:</strong> Flexibele en schaalbare API's, veilige integratie, klantspecifieke oplossingen.</p>
                        <a href="#contact" className="cta-button">Bestel Uw Aangepaste API</a>
                    </div>
                    <div className="service-card">
                        <h3>Microbiologische & Medische API/AI Oplossingen</h3>
                        <p>Door gebruik te maken van expertise in microbiologie en farmacie, ontwikkelen we gespecialiseerde API's en AI-agenten voor gezondheidszorg, diagnostiek en onderzoek, op maat gemaakt voor uw medische behoeften.</p>
                        <p><strong>Belangrijkste Voordelen:</strong> Domeinspecifieke oplossingen, datagedreven inzichten, naleving van medische standaarden.</p>
                        <a href="#contact" className="cta-button">Ontdek Medische Oplossingen</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;