import React from 'react';
import { Carousel } from 'flowbite-react';

const Header = () => {
  return (
    <div className="relative h-96 sm:h-[30rem] xl:h-[50rem]">
      <Carousel slideInterval={5000} slide={true}>
        <div className="relative h-full transform transition-transform duration-2000 ease-out">
          <img
            className="w-full h-full object-cover"
            src="src/assets/p1.jpg"
            alt="First slide"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
            <p className="relative z-10">First slide text</p>
          </div>
        </div>
        <div className="relative h-full transform transition-transform duration-1000 ease-out">
          <img
            className="w-full h-full object-cover"
            src="src/assets/p2c.jpg"
            alt="Second slide"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
            <p className="relative z-10">Second slide text</p>
          </div>
        </div>
        <div className="relative h-full transform transition-transform duration-1000 ease-out">
          <img
            className="w-full h-full object-cover"
            src="src/assets/p3.jpg"
            alt="Third slide"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
            <p className="relative z-10">Third slide text</p>
          </div>
        </div>
      </Carousel>
      <br />
      <hr />

    </div>
  );
};

export default Header;
