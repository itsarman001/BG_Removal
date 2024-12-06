import { useState } from 'react';
import { assets } from '../assets/assets';
import { Heading } from './';

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const handleSliderPosition = (e) => setSliderPosition(e.target.value);
  return (
    <div className='pb-10 md:py-10 mx-2'>
      <Heading
        bgGradient={true}
        className="py-3 mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold "
      >
        Remove Background With <br /> High Quality and Accuracy
      </Heading>
      <div className="w-full relative max-w-3xl overflow-hidden m-auto rounded-xl">
        {/* Background Image */}
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt="Image with background"
          className="w-full h-full"
        />
        {/* Forground Image */}
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt="Image without background"
          className="absolute top-0 left-0 w-full h-full"
        />
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderPosition}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider'
        />
      </div>
    </div>
  );
};

export default Slider;
