import React from 'react'
import OverlappingImages from './OverlappingImages';

const FeaturedProducts = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h5 className="text-2xl my-3">Featured products</h5>
      <div className="border border-black bg-black rounded-sm"></div>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <img src="/Images/Rectangle 299.png" alt="" />
        <div>
          <h5 className="text-2xl font-semibold"> The Boolean Egyptian</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <OverlappingImages />
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-black rounded-sm"></div>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div>
          <h5 className="text-2xl font-semibold"> The Boolean Egyptian</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <OverlappingImages />
          </div>
        </div>
        <img src="/Images/Rectangle 299 (1).png" alt="" />
      </div>
      <div className="h-0.5 bg-black rounded-sm"></div>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <img src="/Images/Rectangle 299 (2).png" alt="" />
        <div>
          <h5 className="text-2xl font-semibold"> The Boolean Egyptian</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <OverlappingImages />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts
