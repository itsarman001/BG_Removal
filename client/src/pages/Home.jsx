import { assets } from '../assets/assets';
import { Heading, Hero, Slider, Card, UploadButton } from '../components';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* How to use section */}
      <div className="mx-4 lg:mx-44 py-20 xl:py-10">
        <Heading
          bgGradient={true}
          className="text-2xl md:text-3xl lg:text-4xl mt-4 py-3 font-semibold text-center"
        >
          Steps to remove background <br /> image in seconds
        </Heading>

        <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
          <Card
            title="Upload Image"
            subTitle=" Choose any photo you want to edit."
            src={assets.upload_icon}
            altText="Upload Image Icon"
          />
          <Card
            title="Remove background"
            subTitle="Let our tool work its magic in seconds."
            src={assets.remove_bg_icon}
            altText="Remove Background Icon"
          />
          <Card
            title="Download Image"
            subTitle="Save your background-free image instantly."
            src={assets.download_icon}
            altText="Downlod Image Icon"
          />
        </div>
      </div>

      {/* Slider Section */}
      <Slider />

      {/* CTA */}
      <div>
        <Heading
          className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-6 md:py-16"
          bgGradient={true}
        >
          See the magic, Try now.
        </Heading>
        <UploadButton className="text-center mb-24" />
      </div>
    </div>
  );
};

export default Home;
