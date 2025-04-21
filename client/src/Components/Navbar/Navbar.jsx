





import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown } from 'lucide-react';
import '../Navbar/Navbar.css';




const Navbar = () => {
    const [navbarSticky, setNavbarSticky] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);





    // Handle sticky navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            setNavbarSticky(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hover for dropdown menus
    const handleMouseEnter = (section) => {
        setActiveDropdown(section);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };




    return (
        <>
            <div className={`dog-navbar-container ${navbarSticky ? "sticky" : ""}`}>
                <div className="dog-navbar-wrapper">


                <div><h3>EAR STUDIO</h3></div>

                    {/* Hover container wrapping navbar and dropdown */}
                    <div className="navbar-hover-container" onMouseLeave={handleMouseLeave}>
                        <div className="dogs-navbar-middle-wrapper">
                            {["Apple", "Google", "Samsung"].map((category) => (
                                <div key={category} className="dogs-navbar-middle-section"
                                    onMouseEnter={() => handleMouseEnter(category)}>
                                    <div className={category}>
                                        <li>{category.charAt(0).toUpperCase() + category.slice(1)}</li>
                                    </div>
                                    <div>
                                        {activeDropdown === category ? <ChevronUp size={18} className="link-hover" /> 
                                        : <ChevronDown size={18}  className="link-hover" />}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dropdown Menu remains inside the hover container */}
                        <div className="navbar-hover-section">
                            {activeDropdown === "Apple" && (
                                <div className="dropdown-menu-friendly">
                                    <Link className="link-section" to="/accessories">Apple Ear Pods</Link>
                                    <Link className="link-section" to="/accessories">Apple Air Pods</Link>
                                    <Link className="link-section" to="/accessories">Apple Air Accessories</Link>

                                </div>
                            )}
                            {activeDropdown === "Google" && (
                                <div className="dropdown-menu-family">
                                    <Link className="link-section" to="/accessories">Google EarPods </Link>
                                    <Link className="link-section" to="/accessories">Google Earpods Accessories</Link>
                                    <Link className="link-section" to="/accessories">Google Earpods Coupons</Link>
                                </div>
                            )}
                            {activeDropdown === "Samsung" && (
                                <div className="dropdown-menu-intelligent">
                                    <Link className="link-section" to="/accessories">Samsung EarPods</Link>
                                    <Link className="link-section" to="/accessories">Samsung Earpods Accessories</Link>
                                    <Link className="link-section" to="/accessories">Samsung Earpods Coupons</Link>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    ); 
}; 

export default Navbar;
