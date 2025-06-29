import React from 'react';

const Header = () => {
    return (
        <header id="home">
            <nav>
                <div className="container">
                    <h1 className="logo">PharmaLogic AI</h1>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Over Ons</a></li>
                        <li><a href="#services">Diensten</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="hero">
                <div className="container">
                    <h1>PharmaLogic AI: Innovatieve Tech & Medische Oplossingen</h1>
                    <p>Full-stack website ontwikkeling, AI-agenten, aangepaste API's en gespecialiseerde microbiologische & medische oplossingen op maat voor uw behoeften.</p>
                    <a href="#contact" className="cta-button">Krijg een Gratis Consultatie</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
