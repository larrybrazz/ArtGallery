import React from 'react'

const OverlappingImages = () => {
    const images = [
      { image: "Images/Ellipse 45.png" },
      { image: "Images/Ellipse 46.png" },
      { image: "Images/Ellipse 47.png" },
      { image: "Images/Ellipse 48.png" },
      { image: "Images/Ellipse 49.png" },
    ];

  
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex">
        {images.map((image, index) => {
          return <img className='w-10 -mx-2' key={index} src={image.image} />;
        })}
      </div>
      <span className='px-4 py-3 border border-black rounded-full mr-4' >
        <i className="fa fa-arrow-right"></i>
      </span>
    </div>
  );
}

export default OverlappingImages
