import { Heading, UploadButton } from './';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-8 lg:px-44 sm:mt-20">
      <div>
        <Heading className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{' '}
          from <br /> images for free.
        </Heading>
        <p className="my-6 text-[15px] text-gray-500">
          Transform your photos with ease. <br />
          Remove image backgrounds for free in seconds. <br />
          Perfect for personal, professional, or creative projects.
        </p>
        <UploadButton />
      </div>
      <div className="w-full max-w-md">
        <img
          src={assets.header_img}
          alt="Illustration showing background removal"
        />
      </div>
    </div>
  );
};

export default Hero;
