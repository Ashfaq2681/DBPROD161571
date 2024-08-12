import React from "react";
import signupimg from './15.png';
import google from './google-logo.jpg';
import Apple from './th (1).jfif';

const Signup = ({ showSignUp, setShowSignUp }) => {
    return (
        <div style={containerStyle}>
            <div style={contentWrapperStyle}>
                <div style={formColumnStyle}>
                    <h2 style={headingStyle}>Sign up</h2>
                    <p style={paragraphStyle}>Find and enjoy your royalty-free content in a creative way</p>
                    <form style={formStyle}>
                        <input type="email" placeholder="Email" style={inputStyle} />
                        <input type="password" placeholder="Password" style={inputStyle} />
                        <input type="password" placeholder="Retype Password" style={inputStyle} />
                        <div style={checkboxStyle}>
                            <input type="checkbox" style={checkboxInputStyle} />
                            <label style={checkboxLabelStyle}>By signing the account, you accept our Agree to Terms and Conditions</label>
                        </div>
                        <button type="submit" style={buttonStyle}>Sign Up</button>
                    </form>
                    <div style={orTextStyle}>
                        <span style={orSpanStyle}>Or continue with</span>
                        <div style={buttonContainerStyle}>
                            <button style={socialButtonStyle}><img src={google} alt="Google" style={socialButtonImgStyle} /></button>
                            <button style={socialButtonStyle}><img src={Apple} alt="Apple" style={socialButtonImgStyle} /></button>
                        </div>
                    </div>
                </div>
                <div style={imageColumnStyle}>
                    <img src={signupimg} alt='girl' style={imageStyle} />
                </div>
            </div>
        </div>
    );
};

export default Signup;

// Styles
const containerStyle = {
    display: 'flex',
    border: '1px solid black',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Almarai',
};

const contentWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1200px',
    width: '100%',
    padding: '0 20px',
};

const formColumnStyle = {
    flex: '1',
    padding: '20px',
    maxWidth: '600px', // Adjusted for desktop
};

const imageColumnStyle = {
    flex: '1',
    padding: '20px',
    maxWidth: '600px', // Adjusted for desktop
};

const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    font: 'Almarai',
};

const paragraphStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    font: 'Almarai',
};

const formStyle = {
    marginBottom: '30px',
};

const inputStyle = {
    width: '100%',
    height: '50px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    padding: '10px',
    marginBottom: '20px',
};

const checkboxStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
};

const checkboxInputStyle = {
    marginRight: '10px',
    
};

const checkboxLabelStyle = {
    fontSize: '14px',
    font: 'Almarai'
};

const buttonStyle = {
    width: '100%',
    height: '50px',
    borderRadius: '24px',
    backgroundColor: '#4A16D8',
    fontSize: '18px',
    color: '#FFF',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    font: 'Almarai',
};

const orTextStyle = {
    textAlign: 'center',
    font: 'Almarai'
};

const orSpanStyle = {
    fontSize: '16px',
    marginBottom: '10px',
    font: 'Almarai'
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    font: 'Almarai'
};

const socialButtonStyle = {
    width: '150px',
    height: '80px',
    borderRadius: '5px',
    marginRight: '10px',
    border: 'none',
    backgroundColor: '#FFF',
    cursor: 'pointer',
    font: 'Almarai'
};

const socialButtonImgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
};

const imageStyle = {
    maxWidth: '70%', // Set maximum width
    height: '80%',
    borderRadius: '5px',
    marginLeft: '15%',
};


export { Signup };
