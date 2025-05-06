import React from "react"

const Navbar=()=>{
    return (
        <nav>
            <div className="logo">
                <p>Logo</p>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#" className="login">Login</a></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;