import React, { useState } from 'react';
import TC from './Trending Content (11) 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Desktop.css'; // Import your custom CSS file

const Desktop = () => {
    const [showImages, setShowImages] = useState(false);

    return (
        <section className="px-8 md:px-32 py-5 md:py-16 lg:py-40 custom-margin">
            <div className="row justify-content-between ">
                <div className="col-lg-6 col-md-6 col-sm-8 col-10">
                    <div style={{ }}>
                        <div className='heading'>
                        <h1 style={{ }}>Your Masterpiece Starts Here</h1>
                        </div>
                        <div className='paragraph'>
                        <p style={{ }}>Elevate your projects with stunning visuals and captivating sounds. From pixels to polygons, find the perfect asset to bring your ideas to life. Fuel your imagination with high-quality digital resources.</p>
                        </div>
                    </div>
                    <div className='searchbar  ' >
                        <input type="text" placeholder="Search images..." style={{ fontSize: '16px', border: 'none', borderRadius: '50px', flex: 1 ,marginLeft: '10px', outline: 'none'}} />
                        <button >Search</button>
                    </div>
                </div>
                
                <div className="col-lg-5 col-md-5 col-sm-8 col-10  justify-content-end">
                    <img src={TC} alt="Trending Content" style={{ maxWidth: '100%', height: 'auto',  marginBottom: '20px' ,}} />
                </div>
            </div>
            <div className="row justify-content-center" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '15%', marginBottom: '1%', width: 'flex' }}>
                <button className="btn btn-secondary mx-2" style={{ width: '107px', height: '40px', margin: '0 32px ', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000', marginLeft: '0', font: 'Almarai', marginTop: '5px' }}>Psds</button>
                <button className="btn btn-secondary mx-2" style={{ width: '107px', height: '40px', margin: '0 32px ', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000', marginLeft: '4%', font: 'Almarai', marginTop: '5px' }}>Photos</button>
                <button className="btn btn-secondary mx-2" style={{ width: '107px', height: '40px', margin: '0 32px ', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000', marginLeft: '4%', font: 'Almarai', marginTop: '5px' }}>Mockups</button>
                <button className="btn btn-secondary mx-2" style={{ width: '107px', height: '40px', margin: '0 32px ', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000', marginLeft: '4%', font: 'Almarai', marginTop: '5px' }}>Social </button>
                <button className="btn btn-secondary mx-2" style={{ width: '107px', height: '40px', margin: '0 32px ', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000', marginLeft: '4%', font: 'Almarai', marginTop: '5px' }}>Pngs</button>
                <button className="btn btn-secondary mx-2" style={{ width: '107px', height: '40px', margin: '0 32px ', borderRadius: '20px', border: '2px solid #5E5E5E', backgroundColor: 'transparent', color: '#000000', marginLeft: '4%', font: 'Almarai', marginTop: '5px' }}>Vectors</button>
            </div>
        </section>
    );
};

export default Desktop;
