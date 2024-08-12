import React, { useState, useEffect } from 'react';
import logo from './Logo-primary.svg';
import icon from './icon.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
            <div className="containe-custom-margin">
                <div className="row justify-content-between align-items-center ">
                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <img src={logo} alt="logo" style={{ width: '150px', height: 'auto', cursor: 'pointer' }} />
                    </div>
                    <div className="d-block d-md-none col-6 d-flex justify-content-end align-items-center">
                        <button onClick={toggleMenu} style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <span style={{ fontSize: '30px', color: '#4A16D8' }}>&#9776;</span>
                        </button>
                    </div>
                    <div className="col-md-6 d-none d-md-flex justify-content-center">
                        <button style={{ border: 'none', backgroundColor: 'white' }}>
                            <span style={{ font: 'Almarai', fontWeight: 500, fontSize: '18px', color: '#505153', margin: '0 20px' }}>Discover</span>
                        </button>
                        <button style={{ border: 'none', backgroundColor: 'white' }}>
                            <span style={{ font: 'Almarai', fontWeight: 500, fontSize: '18px', color: '#505153', margin: '0 20px' }}>Explore</span>
                            <img src={icon} alt="icons" style={{ width: '15px', height: 'auto', marginLeft: '-15px' }} />
                        </button>
                    </div>
                    <div className="col-md-3 d-none d-md-flex justify-content-end align-items-center">
                        <button style={{ marginRight: '20px', padding: '0 20px', borderRadius: '24px', border: '1px solid #4A16D8', backgroundColor: '#4A16D8', color: '#FFFFFF', fontSize: '18px', width: 'auto', height: '40px', font: 'Almarai', fontWeight: 500 }}>Signup</button>
                        <button style={{ padding: '0 20px', borderRadius: '24px', border: '2px solid #4A16D8', backgroundColor: '#FFFFFF', color: '#4A16D8', fontSize: '18px', width: 'auto', height: '40px', font: 'Almarai', fontWeight: 500 }}>Login</button>
                    </div>
                </div>
                {isMobile && menuOpen && (
                    <div className="row">
                        <div className="col-12 d-flex flex-column align-items-center">
                            <button style={{ border: 'none', backgroundColor: 'white' }}>
                                <span style={{ font: 'Almarai', fontWeight: 500, fontSize: '18px', color: '#505153', margin: '10px 0' }}>Discover</span>
                            </button>
                            <button style={{ border: 'none', backgroundColor: 'white' }}>
                                <span style={{ font: 'Almarai', fontWeight: 500, fontSize: '18px', color: '#505153', margin: '10px 0' }}>Explore</span>
                                <img src={icon} alt="icons" style={{ width: '15px', height: 'auto', marginLeft: '-15px' }} />
                            </button>
                            <button style={{ margin: '10px 0', padding: '0 20px', borderRadius: '24px', border: '1px solid #4A16D8', backgroundColor: '#4A16D8', color: '#FFFFFF', fontSize: '18px', width: 'auto', height: '40px', font: 'Almarai', fontWeight: 500 }}>Signup</button>
                            <button style={{ padding: '0 20px', borderRadius: '24px', border: '2px solid #4A16D8', backgroundColor: '#FFFFFF', color: '#4A16D8', fontSize: '18px', width: 'auto', height: '40px', font: 'Almarai', fontWeight: 500 }}>Login</button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
