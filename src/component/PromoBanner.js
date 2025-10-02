import React from "react";
import "./PromoBanner.css";
import girlImg from "../img/f8062e00ad23ffe6bfbbb9c47ff59e5f7932e7e0.png";

function PromoBanner() {
    const handleShopNow = () => {
        alert("Welcome to Fashion Store! 🛍️");
    };

    return (
        <div className="promo-wrapper">
            <div className="promo-banner">
                <div className="promo-content">
                    <h1 className="promo-title">
                        LET'S<br />
                        EXPLORE<br />
                        UNIQUE<br />
                        CLOTHES.
                    </h1>
                    <p className="promo-desc">
                        Live for Influential and Innovative fashion!
                    </p>
                    <button className="promo-btn" onClick={handleShopNow}>
                        Shop Now
                    </button>
                </div>
                <div className="promo-image-side">
                    <img 
                        src={girlImg} 
                        alt="Fashion model in pink fluffy jacket" 
                        className="promo-img" 
                    />
                </div>
            </div>
        </div>
    );
}

export default PromoBanner;
