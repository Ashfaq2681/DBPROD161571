import React from "react";
import './image.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';
import img10 from './10.png';
import img11 from './11.png';
import img12 from './12.png';
import img14 from './14.png';
import img15 from './15.png';
import img16 from './16.png';
import img17 from './17.png';
import img18 from './18.png';
import img19 from './19.png';
import img20 from './20.png';
import img21 from './21.png';
import img22 from './22.png';
import img23 from './23.png';

const Images = () => {
    const images = [
        { src: img1, },
        { src: img2, },
        { src: img3, },
        { src: img4, },
        { src: img5, },
        { src: img6, },
        { src: img7, },
        { src: img8, },
        { src: img9, },
        { src: img10, },
        { src: img11, },
        { src: img12, },
        { src: img14, },
        { src: img15, },
        { src: img16, },
        { src: img17, },
        { src: img18, },
        { src: img19, },
        { src: img20, },
        { src: img21, },
        { src: img22, },
        { src: img23, }
    ];

    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image.src} alt={`Image ${index}`} style={{  borderRadius: '4px' }} />
                </div>
            ))}
        </div>
    );
};

export default Images;
