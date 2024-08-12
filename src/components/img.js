import React from "react";
import './image.css'
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';

const img =()=>{
    return(
        <>
        <div className="gallery">
            <div>
                <img src={img1}  style={{width: '100%'}}/>
            </div>
            <div>
                <img src={img2}  style={{width: '100%'}}/>
            </div>
            <div>
                <img src={img3}  style={{width: '100%'}}/>
            </div>
            <div>
                <img src={img4}  style={{width: '100%'}}/>
            </div>
            <div>
                <img src={img5}  style={{width: '100%'}}/>
            </div>
            <div>
                <img src={img6}  style={{width: '100%'}}/>
            </div>
            <div>
                <img src={img7}  style={{width: '100%'}}/>
            </div>

        </div>
        </>
    )
};
export default img;