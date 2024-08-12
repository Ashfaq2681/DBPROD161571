import React from "react";
// import './Blog.css'; // Assuming you have your CSS file imported here
import artical from './img35.png';
import articalB from './img35.png';
import articalC from './img40.png';
import articalD from './img39.png';
import articalE from './img32.png';
import articalF from './img2.png';
import articalG from './img43.png';
import articalH from './img15.png';
import articalI from './img17.png';
import articalJ from './img4.png';


const Blog = () => {
  return (  
    <div className= "container-custom-margin justify-content-center "  style={{marginBottom: '160px'}} >
      <div style={{ marginTop: '10%' }}>

      <div className= "col-lg-7 col-md-6 col-sm-10 " style={{ width: '100%',marginTop: '5%',marginBottom: '20px', display: 'flex', alignItems: 'center', border: '2px solid rgba(80, 81, 83, 0.3)', borderRadius: '50px', overflow: 'hidden', }}>
                        <input type="text" placeholder="Search images..." style={{  fontSize: '16px', border: 'none', borderRadius: '50px', padding: '10px' , flex: 1, }} />
                        <button className="searchbtn" style={{ width: '120px', height: '40px', backgroundColor: '#4A16D8', color: '#FFF', fontSize: '16px', borderRadius: '20px', border: '1px solid #4A16D8',  marginLeft: 'auto', font: 'Almarai' }}>Search</button>
                    </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          <button style={{ width: '48.11px', height: '25px', border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E', marginBottom: '5px', marginRight: '5px' }}>Psds</button>
          <button style={{ width: '48.11px', height: '25px', border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E', marginBottom: '5px', marginRight: '5px' , marginLeft: '5%'}}>Photos</button>
          <button style={{ width: '48.11px', height: '25px', border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E', marginBottom: '5px', marginRight: '5px' , marginLeft: '5%'}}>Mockups</button>
          <button style={{ width: '48.11px', height: '25px', border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E', marginBottom: '5px', marginRight: '5px' , marginLeft: '5%'}}>Socialmedia</button>
          <button style={{ width: '48.11px', height: '25px', border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E', marginBottom: '5px', marginRight: '5px' , marginLeft: '5%'}}>Pnds</button>
          <button style={{ width: '48.11px', height: '25px', border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E', marginBottom: '5px', marginRight: '5px' , marginLeft: '5%'}}>Vectors</button>
        </div>
      </div>

      <div className= "row" style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', flexWrap: 'wrap' }}>
        <div className="row "  style={{marginBottom: '20px'}}>
        <div  className= "col-lg-7 col-md-8 col-sm-10" style={{ marginBottom: '20px', marginLeft: '2%' , marginBottom: '10%'}}>
          <img src={artical} alt="artical" style={{ width: '100%',height: '100%',  borderRadius: '5px', marginBottom: '10px' }} />
          <h4 style={{ font: 'Almarai', marginBottom: '5px' }}>21 fun Birthday Card ideas pro tip inspiration for friends, and More</h4>
          <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
        </div>

        <div className="col  " >
        <div className= "col-lg-4 col-md-4 col-sm-10"  style={{ marginTop: '40px', maxWidth: '600px',  marginBottom: '20px' ,marginLeft: '2%' , width: '100%'}}>
          <img src={articalC} alt="artical-b" style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
          <h5 style={{ font: 'Almarai', marginBottom: '5px' }}>The easiest cards to pun off of are those with a theme.</h5>
          <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
        </div>
        
        <div className= "col-lg-4 col-md-4 col-sm-10" style={{  marginTop: '20px', maxWidth: '600px',maxHeight: '423px',marginBottom: '20px' ,marginLeft: '2%',width: '100%'}}>
          <img src={articalJ} alt="artical-c" style={{ width: '100%', height: '100%',borderRadius: '5px', marginBottom: '10px' }} />
          <h5 style={{ font: 'Almarai', marginBottom: '5px' }}>Write your own pun to go with any birthday card! Pro tip:</h5>
          <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
        </div>
        </div>
        </div>
        

        
          <div className="col-lg-4 col-md-3 col-sm-10" style={{ width: '100%', maxWidth: '460px' ,marginLeft: '2%'}}>
            <img src={articalD} alt="artical-d" style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
            <h5 style={{ font: 'Almarai', marginBottom: '5px' }}>Write your own pun to go with any birthday card! Pro tip:</h5>
            <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-10" style={{ width: '100%', maxWidth: '460px' ,marginLeft: '2%'}}>
            <img src={articalE} alt="artical-e" style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
            <h5 style={{ font: 'Almarai', marginBottom: '5px' }}>Write your own pun to go with any birthday card! Pro tip:</h5>
            <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-10" style={{ width: '100%', maxWidth: '460px' ,marginLeft: '2%'}}>
            <img src={articalF} alt="artical-f" style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
            <h5 style={{ font: 'Almarai', marginBottom: '5px' }}>Write your own pun to go with any birthday card! Pro tip:</h5>
            <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
          </div>
          

        
        <h2 style={{ font: 'Almarai', color: '#505153', width: '100%',  marginTop: '5%'}}>Category b</h2>
        <p style={{font: 'Almarai', color: '#505153', width: '100%', fontSize: '24px',marginLeft: ''}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. It has survived not only five centuries.</p>
        
        
        <div className=" col-lg-4 col-md-4 col-sm-10" style={{ width: '100%', maxWidth: '460px' ,marginLeft: '0', marginBottom: '5%'}}> 
        <img src={articalG} alt="artical-f" style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
          <h5 style={{ font: 'Almarai', marginBottom: '5px' }}>Write your own pun to go with any birthday card! Pro tip:</h5>
          <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
        </div>
        <div className=" col-lg-4 col-md-4 col-sm-10"  style={{ width: '100%', maxWidth: '460px' ,marginLeft: '2%', marginBottom: '5%'}}>
        <img src={articalH} alt="artical-f" style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
          <h5 style={{ font: 'Almarai', marginBottom: '5px' }}>Write your own pun to go with any birthday card! Pro tip:</h5>
          <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
        </div>
        <div  className=" col-lg-4 col-md-4 col-sm-10" style={{ width: '100%',  maxWidth: '460px' ,marginLeft: '2%' ,marginBottom: '5%'}}>
        <img src={articalI} alt="artical-f" style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
          <h5 style={{ font: 'Almarai', marginBottom: '5px' }}>Write your own pun to go with any birthday card! Pro tip:</h5>
          <button style={{ border: 'none', font: 'Almarai', textDecoration: 'underline', background: '#FFFFFF', color: '#5E5E5E' }}>Read more</button>
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
