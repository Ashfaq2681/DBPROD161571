import React, { useState } from "react";
import { auth, googleProvider, appleProvider } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import signupimg from './15.png';
import google from './google-logo.jpg';
import Apple from './th (1).jfif';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User created successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert("Signed up with Google successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleAppleSignup = async () => {
        try {
            await signInWithPopup(auth, appleProvider);
            alert("Signed up with Apple successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-10 col-10 d-flex flex-column justify-content-center align-items-center mb-5 mb-md-0">
                        <h2 className="text-center" style={{ marginBottom: '20px', font: 'Almarai' }}>Sign Up</h2>
                        <p className="text-center" style={{ marginBottom: '30px', font: 'Almarai' }}>Find and enjoy your royalty-free content in a creative way</p>
                        <form onSubmit={handleSignup} className="w-100">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Retype Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-check mb-3">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" style={{ font: 'Almarai' }}>By signing the account, you accept our Agree to Terms and Conditions</label>
                            </div>
                            <button type="submit" className="justify-content-center" style={{ width: '100%', height: '50px', borderRadius: '24px', backgroundColor: '#4A16D8', fontSize: '18px', color: '#FFF', border: 'none', cursor: 'pointer', font: 'Almarai', outline: 'none' }}>Sign Up</button>
                        </form>
                        <div className="text-center mb-3">Or continue with</div>
                        <div className="d-flex justify-content-center mb-3">
                            <button style={{ width: '150px', height: '80px', borderRadius: '5px', marginRight: '10px', border: 'none', backgroundColor: '#FFF', cursor: 'pointer' }} onClick={handleGoogleSignup}>
                                <img src={google} alt="Google" className="img-fluid" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                            </button>
                            <button style={{ width: '150px', height: '80px', borderRadius: '5px', border: 'none', backgroundColor: '#FFF', cursor: 'pointer' }} onClick={handleAppleSignup}>
                                <img src={Apple} alt="Apple" className="img-fluid" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 d-none d-md-block" style={{ marginLeft: '100px' }}>
                        <img src={signupimg} alt="Signup" className="img-fluid" style={{width: '500px'}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
