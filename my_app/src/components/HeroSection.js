import React from "react"
const HeroSection=()=>{
    return(
        <section className="hero">
            <div className="hero-content">
                <div className="tagline">
                    <h1>Your Product Review Hub</h1>
                    <p>Discover and share honest review about the latest products.</p>
                </div>
                <form className="contact-form">
                    <h2 className="contact-heading">Reach out to us</h2>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}
export default HeroSection