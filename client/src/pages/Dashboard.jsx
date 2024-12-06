import { useState } from 'react';
import { assets } from '../assets/assets';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          {/* Original Image Section */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img
              className="rounded-md border"
              src={assets.image_w_bg}
              alt="Original"
            />
          </div>

          {/* Background Removed Section */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Background Removed
            </p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden">
              <img src={assets.image_wo_bg} alt="Removed Background" />
              <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div
                  className={`${
                    isLoading
                      ? 'border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'
                      : ''
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700">
            Try Another Image
          </button>

          <a
            href=""
            className="px-8 py-2.5 text-sm text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700"
          >
            Download Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
