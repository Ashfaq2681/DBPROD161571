import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  // State to hold the fetched images
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch images from the backend when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Make a GET request to fetch images
        const response = await axios.get("http://localhost:4000/api/user/getimages"); // Update with your correct endpoint
        setImages(response.data.data);  // Assuming the response contains the image data
        setLoading(false);  // Set loading to false after images are fetched
      } catch (err) {
        console.error(err);
        setError('Failed to fetch images');
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchImages();  // Call the function to fetch images
  }, []);  // Empty dependency array ensures this runs only once after the initial render
console.log(images)
  // Render loading, error, or the image grid
  if (loading) {
    return <div>Loading images...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* {images.map((image) => (
        <div key={image._id} className="image-item">
          <img
            src={`uploads/images/${image.photos[0]}`}  // Adjust the path based on your server setup
            alt={image.category}
            className="w-full h-auto"
          />
        </div>
      ))} */}
    </div>
  );
};

export default ImageGallery;
