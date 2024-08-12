import React from "react";
import './Desktop.css'
import img37 from './Gallery/img37.png';
import Vector from './Vector.png';
import dots from './Group 17.png';
import { storage } from "../Firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

const Download = () => {
    const handleSave = () => {
        const imageElement = document.createElement('img');
        imageElement.src = img37;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        imageElement.onload = () => {
            canvas.width = imageElement.width;
            canvas.height = imageElement.height;
            context.drawImage(imageElement, 0, 0);

            const anchor = document.createElement('a');
            anchor.href = canvas.toDataURL();
            anchor.download = 'Figma_image.png';
            anchor.click();
        };
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Share Image',
                text: 'Check out this image!',
                url: img37,
            });
        } else {
            console.error('Web Share API not supported');
        }
    };

    const handleDownload = async () => {
        try {
            const imageRef = storage.ref('images/img37.png');
            const downloadUrl = await imageRef.getDownloadURL();

            const anchor = document.createElement('a');
            anchor.href = downloadUrl;
            anchor.download = 'downloaded_image.png';
            anchor.click();
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };

    return (
        <div className="container-custom-margin  " style={{marginTop: '200px'}}>
            <div className="row mb-3" >
                <div className="col d-flex justify-content-center" style={{}}>
                    <button className=" mx-2 d-flex align-items-center"  style={{borderRadius: '24px', marginRight: '10px', font: 'Almarai', fontSize: '18px', border: 'none', cursor: 'pointer',  }} onClick={handleSave}>
                        <span className="mr-2" >Save</span>
                        <img src={Vector} alt="Vector" style={{ width: '20px', height: 'auto' ,  marginLeft: '10px'}} />
                    </button>
                    <button className=" mx-2 d-flex align-items-center" style={{borderRadius: '24px', marginRight: '10px', font: 'Almarai', fontSize: '18px', border: 'none', cursor: 'pointer'}} onClick={handleShare}>
                        <span className="mr-2">Share</span>
                        <img src={dots} alt="dots" style={{ width: '20px', height: 'auto',  marginLeft: '10px'}} />
                    </button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <img src={img37} alt="girl" className="img-fluid rounded" />
                </div>
            </div>
            <div className="row mb-3 " >
                <div className="col">
                    <p className="text-right" style={{font: 'Almarai' }}>Beautiful Model Posing at the Sunlight, City Background with Gray Clothes Friendly smiling woman looking pleased at front</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col d-flex justify-content-start">
                    <button style={{borderRadius: '24px',height: '37px', width: '137px', backgroundColor: '#4A16D8', color: '#FFFFFF', cursor: 'pointer',border: '1px solid #4A16D8',}} onClick={handleDownload}>Download</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="text-left text-muted" style={{ fontSize: '10px' }}>
                        Beautiful Premium images aren't included in image subscriptions, FLEX subscriptions, or on-demand packs. You can license and pay for them separately. Model Posing at the Sunlight, City Background with Gray Clothes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Download;
