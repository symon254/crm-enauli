import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Enauli</h1>
                </Link>
                <nav></nav>
            </div>
        </header>
    );
};

export default Navbar;
