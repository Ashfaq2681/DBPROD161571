import React, { useState, useEffect } from 'react';
import Signup from './Signup';
import Login from './Login';
import logo from './Logo-primary.svg';

const Header = ({ showDesktop, setShowDesktop }) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [headerHeight, setHeaderHeight] = useState('80px');
    const [headerMaxWidth, setHeaderMaxWidth] = useState('1728px');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);

            if (window.innerWidth <= 430) {
                setHeaderHeight('56px');
                setHeaderMaxWidth('100%');
            } else if (window.innerWidth <= 1024) {
                setHeaderHeight('57px');
                setHeaderMaxWidth('1024px');
            } else {
                setHeaderHeight('80px');
                setHeaderMaxWidth('1728px');
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSignUpButtonClick = () => {
        setShowSignUp(!showSignUp);
        setShowLogin(false);
        setShowDesktop(false); // Hide desktop component when signup button is clicked
    };
    
    const handleLoginButtonClick = () => {
        setShowLogin(!showLogin);
        setShowSignUp(false);
        setShowDesktop(!showDesktop); // Toggle visibility of desktop component when login button is clicked
    };

    return (
        <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #EAEAEA', height: headerHeight, maxWidth: headerMaxWidth }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5vw', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="logo" style={{ width: '150px', height: 'auto', cursor: 'pointer' }} />
                </div>
                {!isMobile && (
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', justifyContent: 'center' }}>
                        <span style={{ font: 'Almarai', fontWeight: 400, fontSize: '18px', color: '#505153', margin: '0 20px' }}>Explore</span>
                        <span style={{ font: 'Almarai', fontWeight: 400, fontSize: '18px', color: '#505153', margin: '0 20px' }}>Discover</span>
                    </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="signup" onClick={handleSignUpButtonClick} style={{ marginRight: '20px', padding: '10px 20px', borderRadius: '24px', border: '1px solid #969696', backgroundColor: '#4A16D8', color: '#FFFFFF', fontSize: '16px', width: '100px', height: '40px', font: 'Almarai' }}>Signup</button>
                    <button className="login" onClick={handleLoginButtonClick} style={{ padding: '10px 20px', borderRadius: '24px', border: '1px solid #505153', backgroundColor: '#FFFFFF', color: '#4A16D8', fontSize: '16px', width: '100px', height: '40px', font: 'Almarai' }}>Login</button>
                </div>
            </div>
            {showSignUp && <Signup />}
            {showLogin && <Login showDesktop={showDesktop} setShowDesktop={setShowDesktop} />} {/* Pass setShowDesktop to Login component */}
        </header>
    );
};

export default Header;
