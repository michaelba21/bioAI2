import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <h2>Ons Werk</h2>
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="E-commerce Website Project" />
                        <h3>E-commerce Website</h3>
                        <p>Bouwde een responsieve e-commerce website voor een retailklant, waardoor de verkoop met 30% toenam.</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Healthcare AI Agent Project" />
                        <h3>Gezondheidszorg AI Agent</h3>
                        <p>Ontwikkelde een AI-agent om heropnamepercentages van patiënten te voorspellen voor een ziekenhuisnetwerk.</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Custom Data API Project" />
                        <h3>Aangepaste Data API</h3>
                        <p>Creëerde een aangepaste API voor een financiële tech startup om real-time aandelendata te streamen.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;