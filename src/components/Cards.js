import React from "react";
import "./Cards.css";

import hoodieImg from "../img/models/Rectangle20.png";
import coatImg from "../img/models/Rectangle21.png";
import tshirtImg from "../img/models/Rectangle22.png";

function Cards() {
    return (
        <section className="cards-section">
            <h2 className="cards-title">NEW ARRIVALS</h2>

            <div className="cards">
                <div className="card">
                    <img src={hoodieImg} alt="Hoodie" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-name">Hoodies & Sweetshirt</h3>
                        <p className="card-subtitle">Explore Now!</p>
                        <span className="arrow">→</span>
                    </div>
                </div>

                <div className="card">
                    <img src={coatImg} alt="Coats" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-name">Coats & Parkas</h3>
                        <p className="card-subtitle">Explore Now!</p>
                        <span className="arrow">→</span>
                    </div>
                </div>

                <div className="card">
                    <img src={tshirtImg} alt="T-Shirt" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-name">Tees & T-Shirt</h3>
                        <p className="card-subtitle">Explore Now!</p>
                        <span className="arrow">→</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cards;
