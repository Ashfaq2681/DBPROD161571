import React from "react";
import loginimg from './15.png'
import google from './google-logo.jpg';
import Apple from './th (1).jfif';

const Login = ({ showLogin, setShowLogin }) => {
    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <div style={formColumnStyle}>
                    <h2 style={headingStyle}>Log In</h2>
                    <p style={paragraphStyle}>Welcome back! Please enter your details to start your creative journey.</p>
                    <form style={formStyle}>
                        <input type="email" placeholder="Email" style={inputStyle} />
                        <input type="password" placeholder="Password" style={inputStyle} />
                        <div style={labelStyle}>
                            <label style={forgetPasswordStyle}>Forget Password</label>
                        </div>
                        <button type="submit" style={buttonStyle}>Login</button>
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
                    <img src={loginimg} alt='girl' style={imageStyle} />
                </div>
            </div>
        </div>
    );
};

export default Login;

// Styles
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
};

const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    font: 'Almarai'
};

const formColumnStyle = {
    flex: '1',
    padding: '20px',
};

const imageColumnStyle = {
    flex: '1',
    padding: '20px',
};

const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    font: 'Almarai'
};

const paragraphStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    font: 'Almarai'
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
    font: 'Almarai'
};

const labelStyle = {
    marginBottom: '10px',
    font: 'Almarai'
};

const forgetPasswordStyle = {
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
    font: 'Almarai'
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
    font: 'Almarai',
    justifyContent: 'center',
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
    font: 'Almarai'
};

const imageStyle = {
    maxWidth: '70%', // Adjusted for responsiveness
    height: '80%',
    borderRadius: '5px',
    marginLeft: '15%',
};

export { Login };
