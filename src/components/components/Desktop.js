// Desktop.js
import React, { useState } from 'react';
//import Images from './Images';
//import Footer from './Footer';
import Download from './download';
import TC from './Trending Content (11) 1.png';

const Desktop = () => {
    const [showImages, setShowImages] = useState(false);
    const [footerMargin, setFooterMargin] = useState(0);
    const [desktopMaxWidth, setDesktopMaxWidth] = useState('1768px');
    const [desktopHeight, setDesktopHeight] = useState('1075px');

    // const handlePhotosButtonClick = () => {
    //     setShowImages(!showImages);
    //     setFooterMargin(showImages ? 0 : 600);
    // };

    return (
        <section style={{ width: '100%', height: desktopHeight, maxWidth: desktopMaxWidth, padding: '20px', boxSizing: 'border-box', marginTop: '10%' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 50%', textAlign: 'left', marginBottom: '20px' }}>
                    <h2 style={{ font: 'Almarai', fontWeight: 700, fontSize: '32px', lineHeight: '36px', color: '#505153' }}>Create Visual Journey</h2>
                    <p style={{ font: 'Almarai', fontWeight: 300, fontSize: '16px', lineHeight: '24px', color: '#505153', maxWidth: '400px', marginBottom: '20px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. It has survived not only five centuries.</p>
                    <div style={{ marginBottom: '20px' }}>
                        <input type="text" placeholder="Search images..." style={{ width: '60%', height: '40px', fontSize: '16px', border: '2px solid rgba(80, 81, 83, 0.3)', borderRadius: '20px', padding: '0 20px' }} />
                        <button className="searchbtn" style={{ width: '100px', height: '40px', backgroundColor: '#4A16D8', color: '#FFF', fontSize: '16px', borderRadius: '20px', border: '1px solid #505153', marginTop: '10px', marginLeft: '-11.2%', font: 'Almarai' }}>Search</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '35%', marginBottom: '1%', }}>
                        <button className="psds" style={{ width: '100px', height: '40px', margin: '0 5px 10px', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000', marginLeft: '0', font: 'Almarai' }}>Psds</button>
                        <button className="photos" style={{ width: '100px', height: '40px', margin: '0 5px 10px', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000', marginLeft: '4%' ,font: 'Almarai'}} >Photos</button>
                        <button className="mockups" style={{ width: '100px', height: '40px', margin: '0 5px 10px', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000',marginLeft: '4%',font: 'Almarai' }}>Mockups</button>
                        <button className="socialmedia" style={{ width: '100px', height: '40px', margin: '0 5px 10px', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000',marginLeft: '4%',font: 'Almarai' }}>Social Media</button>
                        <button className="pngs" style={{ width: '100px', height: '40px', margin: '0 5px 10px', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000',marginLeft: '4%',font: 'Almarai' }}>Pngs</button>
                        <button className="vectors" style={{ width: '100px', height: '40px', margin: '0 5px 10px', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000',marginLeft: '4%',font: 'Almarai' }}>Vectors</button>
                    </div>
                </div>
                <img src={TC} alt="Trending Content" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '20px', marginBottom: '20px' }} />
            </div>
            {/* {showImages && <Images />} */}
            {/* <Footer style={{ marginTop: `${footerMargin}px` }} /> */}
        </section>
    );
};

export default Desktop;
