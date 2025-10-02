import React from "react";
import "./Subscribe.css";

function Subscribe() {
    return (
        <section className="subscribe-section">
            <h2 className="subscribe-title">
                JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
            </h2>
            <p className="subscribe-subtitle">
                Type your email down below and be young wild generation
            </p>

            <form className="subscribe-form">
                <input
                    type="email"
                    placeholder="Add your email here"
                    className="subscribe-input"
                />
                <button type="submit" className="subscribe-button">
                    SEND
                </button>
            </form>
        </section>
    );
}

export default Subscribe;
