import React from 'react';

import './About.css';  // Add this line to import the CSS file
const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h1>PharmaLogic AI - Intelligente Technologie voor de Toekomst van Gezondheidszorg & Onderzoek</h1>
                
                <div className="hero-section">
                    <h2>Waar Wetenschap en Software Samensmelten</h2>
                    <p><strong>"Wij ontwikkelen AI-gestuurde onderzoeksplatformen en intelligente API's die farmaceutisch onderzoek transformeren. Van molecuul tot medicijn, van data tot diagnose."</strong></p>
                </div>

                <div className="company-info">
                    <h2>Wie Wij Zijn</h2>
                    <div className="expertise-points">
                        <div className="point">
                            <span className="checkmark">✔</span>
                            <p>Opgericht door een Full Stack Developer met Bachelor Microbiologie + Master Farmacie</p>
                        </div>
                        <div className="point">
                            <span className="checkmark">✔</span>
                            <p>Specialisten in zowel klinische onderzoeken als enterprise software-architectuur</p>
                        </div>
                        <div className="point">
                            <span className="checkmark">✔</span>
                            <p>Bruggenbouwers tussen laboratoriumbanken en cloudinfrastructuur</p>
                        </div>
                    </div>
                </div>

                <div className="mission">
                    <h2>Onze Missie</h2>
                    <p><strong>Het versnellen van medische doorbraken door intelligente digitalisering van:</strong></p>
                    <ul className="bullet-list">
                        <li>Preklinische onderzoeken</li>
                        <li>Klinische trial-analyses</li>
                        <li>Farmacovigilantie-systemen</li>
                    </ul>
                </div>

                <div className="solutions">
                    <h2>Kernoplossingen</h2>
                    <div className="solution-item">
                        <h3>1. Onderzoeks-API Ecosystemen</h3>
                        <p><strong>Schaalbare pipelines voor:</strong></p>
                        <ul className="nested-list">
                            <li>Lab-apparaatintegratie (HPLC/MS ↔ LIMS-systemen)</li>
                            <li>EDC (Electronic Data Capture) voor klinische studies</li>
                            <li>Automatische adverse event rapportage (E2B-compliant)</li>
                        </ul>
                    </div>

                    <div className="solution-item">
                        <h3>2. Wetenschappelijke AI Co-Pilots</h3>
                        <p><strong>Specifiek getraind voor:</strong></p>
                        <ul className="nested-list">
                            <li>Literatuursynthese (PubMed/Embase met RWE-context)</li>
                            <li>Voorspellende toxiciteitsmodellen (QSAR-optimalisatie)</li>
                            <li>Anomaliedetectie in trial-data (ICH GCP-normen)</li>
                        </ul>
                    </div>

                    <div className="solution-item">
                        <h3>3. Compliant Dashboarden</h3>
                        <p>21 CFR Part 11-geldige interfaces voor:</p>
                        <ul className="nested-list">
                            <li>Real-time PK/PD visualisatie</li>
                            <li>Genoom-phenoom correlaties</li>
                            <li>GMP-kwaliteitscontrole trends</li>
                        </ul>
                    </div>
                </div>

                <div className="case-study">
                    <h2>Case Study - Farmaceutische Innovatie</h2> 
                    <p><strong>Voor een Europees oncologiecentrum ontwikkelden we een geïntegreerd platform dat:</strong></p>
                    <ul className="bullet-list">
                        <li>Patiëntrekrutering versnelde met NLP-screening van EMR's</li>
                        <li>Onderzoekskosten reduceerde met 40% via AI-gestuurde trial-design</li>
                        <li>Automatisch voldoet aan EMA/FDA datastandaarden</li>
                    </ul>
                </div>

                <div className="technology-stack">
                    <h2>Onze Technologische Ruggengraat</h2>
                    <ul className="tech-list">
                        <li>React/Vue met LabData.js voor wetenschappelijke visualisaties</li>
                        <li>Python (RDKit/PyTorch) voor computationele farmacologie</li>
                        <li>HIPAA/GxP-compliant cloudarchitecturen</li>
                    </ul>
                </div>

                <div className="partnership">
                    <h2>Partnership Model</h2>
                    <p>Wij gaan verder dan consultancy - we worden een verlengstuk van uw onderzoeksteam met:</p>
                    <ul className="bullet-list">
                        <li>Gezamenlijke sprintplanning met uw wetenschappers</li>
                        <li>Transparante code-reviews door onze PhD-developers</li>
                        <li>Continue training op AI-tools voor uw staff</li>
                    </ul>
                </div>

                <div className="ethics">
                    <h2>Ethische Fundering</h2>
                    <p>Alle oplossingen worden ontwikkeld volgens:</p>
                    <ul className="bullet-list">
                        <li>FAIR data-principes</li>
                        <li>GDPR/AVG-compliance</li>
                        <li>Verplichte algoritmetransparantie</li>
                    </ul>
                </div>

                <div className="why-us">
                    <h2>Waarom Dit Werkt</h2>
                    <ul className="reasons-list">
                        <li>Geloofwaardigheid: Combineert je unieke academische achtergrond met tech-expertise</li>
                        <li>Differentiatie: Benadrukt de zeldzame combinatie van farmacie + software engineering</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;