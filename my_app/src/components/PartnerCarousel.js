import React from "react";
const PartnerCarousel = () => {
  const partners = [
    { logo: "https://i.postimg.cc/NMTYZT17/TJ-Klune-Scrolling-Logos-Amazon.png" },
    { logo: "https://i.postimg.cc/xTXgQRk2/65a12feeb87ad4b42cec176e-Newsletter-21.png" },
    { logo: "https://i.postimg.cc/sgtNqLKq/Screenshot-2025-05-24-at-1-04-39-PM-removebg-preview.png" },
    { logo: "https://i.postimg.cc/prrSg55X/myntra-black-and-white-32.png" },
    { logo: "https://i.postimg.cc/JnLzJ4LQ/zara-logo.png" },
    { logo: "https://i.postimg.cc/QNWVzP65/hm-logo-black-and-white.png" },
    { logo: "https://i.postimg.cc/zfmgtNNy/prada-logo-1.png" },
  ];

  const repeated = [...partners, ...partners]; 
    return(
        <section className="partner-carousel">
            <div className="heading">
                <h2>Our Networks</h2>
                <hr className="green-line"/>
                <h3>Businesses We Are Working With </h3>
            </div>
            <div className="auto-scoll-container">
            <div className="scroll-left">
            {repeated.map((partner, index) => (
            <div key={index} className="carousel-item">
            <img src={partner.logo} alt="partner-logo" />
            </div>
            ))};
            </div>
        </div>
        </section>
    );
};
export default PartnerCarousel;