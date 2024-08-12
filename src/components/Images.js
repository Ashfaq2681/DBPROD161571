import React from "react";
import './image.css'
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
import img13 from './13.png';
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

const ImageGallery =()=>{

  let data=[
    { id: 1, imgSrc: img1 ,},
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 },
    { id: 7, imgSrc: img7 },
    { id: 8, imgSrc: img8 },
    { id: 9, imgSrc: img9 },
    { id: 10, imgSrc: img10 },
    { id: 11, imgSrc: img11 },
    { id: 12, imgSrc: img12 },
    { id: 13, imgSrc: img13 },
    { id: 14, imgSrc: img14 },
    { id: 15, imgSrc: img15 },
    { id: 16, imgSrc: img16 },
    { id: 17, imgSrc: img17 },
    { id: 18, imgSrc: img18 },
    { id: 19, imgSrc: img19 },
    { id: 20, imgSrc: img20 },
    { id: 21, imgSrc: img21 },
    { id: 22, imgSrc: img22 },
    { id: 23, imgSrc: img23 }

  ]

  return(
    <>
    <div className="gallery">
      {data.map((item, index)=>{
        return(
          <div className="pics" key={index}>
            <img src={item.imgSrc} style={{width: '100%' , }}/>

          </div>

        )
      })}

      
    </div>
    
    </>
    
  )

};
export default ImageGallery