import React, { useState, useEffect } from 'react';
import { Maincarouseldata } from './Maincarouseldata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getImageSize } from 'react-image-size';

const MainCarousel = () => {
  const [imageDimensions, setImageDimensions] = useState([]);

  useEffect(() => {
    const fetchImageDimensions = async () => {
      const dimensionsPromises = Maincarouseldata.map(async (item) => {
        const dimensions = await getImageSize(item.Image);
        return { src: item.Image, dimensions };
      });

      const resolvedDimensions = await Promise.all(dimensionsPromises);
      setImageDimensions(resolvedDimensions);
    };

    fetchImageDimensions();
  }, []);

  const maxWidth = 1000; 
  const maxAspectRatio = 2; // Set your maximum aspect ratio (height/width)

  const items = imageDimensions.map((item) => {
    const width = Math.min(item.dimensions.width, maxWidth);
    const height = Math.min(width * maxAspectRatio, item.dimensions.height);

    return (
      <img
        key={item.src}
        className='cursor-pointer'
        role='presentation'
        src={item.src}
        alt=''
        width="1000"
        height="1100"
      />
    );
  });

  return (
    <div className="carousel-container">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
