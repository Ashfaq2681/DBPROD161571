import React from "react";
import img37 from './Gallery/img37.png';

const Download = () => {
    return (
        <div style={containerStyle}>
            <div style={buttonContainerStyle}>
                <button style={buttonStyle}>Save</button>
                <button style={buttonStyle}>Share</button>
            </div>
            <div style={imageContainerStyle}>
                <img src={img37} alt="girl" style={imageStyle} />
                {/* No need for extra buttons here */}
            </div>
            <p style={paragraphStyle}>Beautiful Model Posing at the Sunlight, City Background with Gray Clothes Friendly smiling woman looking pleased at front</p>
            <button style={downloadButtonStyle}>Download</button>
            <p style={bottomParagraphStyle}>Beautiful Premium images aren't included in image subscriptions, FLEX subscriptions, or on-demand packs. You can license and pay for them separately Model Posing at the Sunlight, City Background with Gray Clothes</p>
        </div>
    );
};

export default Download;

// Styles
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '10%'


};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '10px',
};

const buttonStyle = {
    borderRadius: '24px',
    marginRight: '10px',
    font: 'Almarai',
    width: '80px',
    height: '40px',
    fontSize: '16px'
};

const imageContainerStyle = {
    position: 'relative',
    marginBottom: '10px',
};

const imageStyle = {
    width: '731px',
    height: '281px',
    borderRadius: '4px'
};

const paragraphStyle = {
    marginBottom: '10px',
};

const downloadButtonStyle = {
    borderRadius: '24px',
    marginBottom: '10px',
};

const bottomParagraphStyle = {
    textAlign: 'center',
};
