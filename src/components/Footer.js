import React from "react";
import logo from './Logo-primary.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000000', paddingTop: '50px'}}>
            <div className="bg-black px-5 md:px-32 py-5 md:py-16 bottom-0 mt-40 ">
                <div className="row"  > 
                    {/* Resources Section */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12" >
                        <h4 style={{ color: '#FFFFFF', textAlign: 'left', marginBottom: '20px' }}>Resources</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor: 'pointer', }}>
                            <li style={{ color: '#5E5E5E' }}>Stock Photos</li>
                            <li style={{ color: '#5E5E5E' }}>Collection</li>
                            <li style={{ color: '#5E5E5E' }}>Editorials</li>
                            <li style={{ color: '#5E5E5E' }}>Featured</li>
                        </ul>
                    </div>
                    {/* Our Company Section */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4 style={{ color: '#FFFFFF', textAlign: 'left', marginBottom: '20px' }}>Our Company</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor: 'pointer' }}>
                            <li style={{ color: '#5E5E5E' }}>About Us</li>
                            <li style={{ color: '#5E5E5E' }}>Pricing</li>
                            <li style={{ color: '#5E5E5E' }}>Coupons</li>
                            <li style={{ color: '#5E5E5E' }}>Contact Us</li>
                        </ul>
                    </div>
                    {/* Legal Section */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4 style={{ color: '#FFFFFF', textAlign: 'left', marginBottom: '20px' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor: 'pointer' }}>
                            <li style={{ color: '#5E5E5E' }}>Terms of Use</li>
                            <li style={{ color: '#5E5E5E' }}>Terms of Services</li>
                            <li style={{ color: '#5E5E5E' }}>Privacy Policy</li>
                            <li style={{ color: '#5E5E5E' }}>Patents</li>
                        </ul>
                    </div>
                    {/* Earn Section */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4 style={{ color: '#FFFFFF', textAlign: 'left', marginBottom: '20px' }}>Earn</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor: 'pointer' }}>
                            <li style={{ color: '#5E5E5E' }}>Affiliate Partner Benefits</li>
                            <li style={{ color: '#5E5E5E' }}>Shop Benefits</li>
                            <li style={{ color: '#5E5E5E' }}>Become an Ambassador</li>
                        </ul>
                    </div>
                </div>
                <div className="row"  >
                    {/* Packages Section */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4 style={{ color: '#FFFFFF', textAlign: 'left', marginBottom: '20px' }}>Packages</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor: 'pointer' }}>
                            <li style={{ color: '#5E5E5E' }}>Enterprise Package</li>
                            <li style={{ color: '#5E5E5E' }}>Agency Packages</li>
                        </ul>
                    </div>
                    {/* Check out more Section */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4 style={{ color: '#FFFFFF', textAlign: 'left', marginBottom: '20px' }}>Check out more</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor: 'pointer' }}>
                            <li style={{ color: '#5E5E5E' }}>Gift cards</li>
                            <li style={{ color: '#5E5E5E' }}>Coupons</li>
                        </ul>
                    </div>
                    {/* Privacy Policy Section */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4 style={{ color: '#FFFFFF', textAlign: 'left', marginBottom: '20px' }}>Privacy Policy</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor: 'pointer' }}>
                            <li style={{ color: '#5E5E5E' }}>Licenses</li>
                            <li style={{ color: '#5E5E5E' }}>Help left</li>
                        </ul>
                    </div>
                    {/* Languages Section */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4 style={{ color: '#FFFFFF', textAlign: 'left', marginBottom: '20px' }}>Languages</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left', cursor: 'pointer' }}>
                            <li style={{ color: '#5E5E5E' }}>AR   DE    EN   ES</li>
                            <li style={{ color: '#5E5E5E' }}>FR    ID    IT    JA</li>
                            <li style={{ color: '#5E5E5E' }}>KD    NL    PL    PT </li>
                            <li style={{ color: '#5E5E5E' }}>SV    TH</li>
                        </ul>
                    </div>
                </div>
                <div className="row" >
                {/* Logo and Paragraph */}
                <div className="col-lg-12 col-md-12" >
                    <div className="row" >
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 mb-lg-0">
                            <img src={logo} alt='harry photos' style={{ cursor: 'pointer', maxWidth: '250px', height: 'auto' }} />
                        </div>
                        <div className="col-lg-9 col-md-6 col-sm-6">
                            <div style={{ textAlign: 'left', color: '#5E5E5E', marginBottom: '20px' }}>
                                Sign up for a free account today and start exploring our Image Content Library. Whether you're working on a professional project, sprucing up your personal blog, or simply seeking visual inspiration, we've got you covered
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
