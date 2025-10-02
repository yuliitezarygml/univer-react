import React from "react";
import "./Cardsgirl.css";
import hoodieImg from "../img/models/Rectangle49.png";
import coatImg from "../img/models/Rectangle50.png";

function Cardsgirl() {
    return (
        <section className="cardsgirl-section">
            <h2 className="cardsgirl-title">Young’s Favourite</h2>

            <div className="cardsgirl-wrapper">
                <div className="cardsgirl-item">
                    <img src={hoodieImg} alt="Hoodie" className="cardsgirl-img" />
                    <div className="cardsgirl-content">
                        <h3 className="cardsgirl-name">Hoodies & Sweetshirt</h3>
                        <p className="cardsgirl-subtitle">Explore Now!</p>
                        <span className="cardsgirl-arrow">→</span>
                    </div>
                </div>

                <div className="cardsgirl-item">
                    <img src={coatImg} alt="Coats" className="cardsgirl-img" />
                    <div className="cardsgirl-content">
                        <h3 className="cardsgirl-name">Coats & Parkas</h3>
                        <p className="cardsgirl-subtitle">Explore Now!</p>
                        <span className="cardsgirl-arrow">→</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cardsgirl;
