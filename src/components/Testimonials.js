import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <h2>Wat Onze Klanten Zeggen</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p>"Hun AI-agent heeft onze workflow getransformeerd!"</p>
                        <span>- Anonieme Klant ★★★★★</span>
                    </div>
                    <div className="testimonial-card">
                        <p>"Een zeer professioneel en bekwaam team. Onze nieuwe website is fantastisch."</p>
                        <span>- Jane Doe, CEO ★★★★★</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;