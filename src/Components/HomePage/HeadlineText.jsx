import React from "react";
import Carousel from "./Carousel";

const HeadlineText = () => {
  return (
    <div className="font-serif w-11/12 mx-auto">
      <h1 className="text-2xl font-semibold md:text-4xl my-4 ">
        Photography is poetry &amp; beautiful untold stories
      </h1>

      <p>
        Flip through more than 10,000 vintage shots, old photographs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>
      <Carousel/>
    </div>
  );
};

export default HeadlineText;
