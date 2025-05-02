import React from "react"
import "./Navbar.css"
const Navbar=()=>{
    return (
        <nav>
            <div className="logo">
                <a href="#">Logo</a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#" className="login">Login</a></li>
                <li><a href="#" className="signup">Signup</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;