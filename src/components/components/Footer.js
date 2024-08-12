import React from "react";
import logo from './Logo-primary.svg';

const Footer = () =>{
    return(
        <footer style={{ width: '100%', backgroundColor: '#000000', paddingTop: '10px', display: 'flex', justifyContent : 'flex-start',flexDirection: 'column', alignItems: 'left' , marginTop: '10%'}}>
            <div style={{ width: '100%', maxWidth: '1200px', padding: '0 20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', marginBottom: '50px' }}>
                    {/* Resources Section */}
                    <div style={{ margin: '0 20px', flex: '1 1 0px' }}>
                        <h4 style={{ color: '#FFFFFF', font: 'Almarai', textAlign: 'left', marginBottom: '20px' }}>Resources</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor:'pointer',  }}>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Stock Photos</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Collection</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Editorials</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Featured</li>
                        </ul>
                    </div>
                    {/* Our Company Section */}
                    <div style={{ margin: '0 20px', flex: '1 1 0px' }}>
                        <h4 style={{ color: '#FFFFFF', font: 'Almarai', textAlign: 'left', marginBottom: '20px' }}>Our Company</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor:'pointer' }}>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>About Us</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Pricing</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Coupons</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Contact Us</li>
                        </ul>
                    </div>
                    {/* Legal Section */}
                    <div style={{ margin: '0 20px', flex: '1 1 0px' }}>
                        <h4 style={{ color: '#FFFFFF', font: 'Almarai', textAlign: 'left', marginBottom: '20px' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor:'pointer' }}>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Terms of Use</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Terms of Services</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Privacy Policy</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Patents</li>
                        </ul>
                    </div>
                    {/* Earn Section */}
                    <div style={{ margin: '0 20px', flex: '1 1 0px' }}>
                        <h4 style={{ color: '#FFFFFF', font: 'Almarai', textAlign: 'left', marginBottom: '20px' }}>Earn</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor:'pointer' }}>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Affiliate Partner Benefits</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Shop Benefits</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Become an Ambassador</li>
                        </ul>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'left', marginBottom: '20px', flexWrap: 'wrap'}}>
                    {/* Packages Section */}
                    <div style={{ margin: '0 20px', flex: '1 1 0px' }}>
                        <h4 style={{ color: '#FFFFFF', font: 'Almarai', textAlign: 'left', marginBottom: '20px' }}>Packages</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor:'pointer' }}>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Enterprise Package</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Agency Packages</li>
                        </ul>
                    </div>
                    {/* Check out more Section */}
                    <div style={{ margin: '0 20px', flex: '1 1 0px' }}>
                        <h4 style={{ color: '#FFFFFF', font: 'Almarai', textAlign: 'left', marginBottom: '20px' }}>Check out more</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor:'pointer' }}>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Gift cards</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Coupons</li>
                        </ul>
                    </div>
                    {/* Privacy Policy Section */}
                    <div style={{ margin: '0 20px', flex: '1 1 0px' }}>
                        <h4 style={{ color: '#FFFFFF', font: 'Almarai', textAlign: 'left', marginBottom: '20px' }}>Privacy Policy</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor:'pointer' }}>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Licenses</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>Help left</li>
                        </ul>
                    </div>
                    {/* Languages Section */}
                    <div style={{ margin: '0 20px', flex: '1 1 0px' }}>
                        <h4 style={{ color: '#FFFFFF', font: 'Almarai', textAlign: 'left', marginBottom: '20px' }}>Languages</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor:'pointer' }}>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>AR   DE    EN   ES</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>FR    ID    IT    JA</li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>KD    NL    PL    PT </li>
                            <li style={{ color: '#5E5E5E', font: 'Almarai' }}>SV    TH</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Logo and Paragraph */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' , flexWrap: 'wrap',padding: '0 20px' }}>
                <img src={logo} alt='harry photos' style={{cursor:'pointer', marginBottom: '20px', maxWidth: '250px', height: 'auto',  marginLeft: '5%'}} />
                <div style={{ maxWidth: '600px', textAlign: 'left',display: 'flex',flexWrap: 'wrap',justifyContent: 'left', color: '#5E5E5E', font: 'Almarai', marginBottom: '20px' , marginLeft: '5%'}}>
                    Sign up for a free account today and start exploring our Image Content Library. Whether you're working on a professional project, sprucing up your personal blog, or simply seeking visual inspiration, we've got you covered
                </div>
            </div>
        </footer>
    );
};

export default Footer;
