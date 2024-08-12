import React from 'react';
import './subscribe.css';

const Subscription = () => {
  return (
    <div className="subscription-container">
      <div className="subscription-option">
        <h2>Basic</h2>
        <p>Limited number of photos</p>
        <p style={{marginTop: '20px'}}>Basic editing tools</p>
        <p></p>
        <br/>
        <button className="subscribe-button"><strong>Subscribe</strong></button>
      </div>
      <div className="subscription-option">
        <h2>Standard</h2>
        <p>More photos allowed</p>
        <p style={{marginTop: '20px'}}>Additional filters/effects</p>
        <p></p>
        <br/>
        
        <button className="subscribe-button"><strong>Subscribe</strong></button>
      </div>
      <div className="subscription-option">
        <h2>Premium</h2>
        <p>Unlimited photos</p>
        <p>Advanced editing features</p>
        <p>Cloud storage integration</p>
        <button className="subscribe-button"><strong>Subscribe</strong></button>
      </div>
    </div>
  );
};

export default Subscription;
