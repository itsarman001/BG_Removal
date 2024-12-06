import { Upload } from 'lucide-react';

const UploadButton = ({className=""}) => {
  return (
    <div className={`${className}`}>
      <input type="file" accept="image/*" id="upload1" className="hidden" />
      <label
        htmlFor="upload1"
        className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
      >
        <Upload color="white" />
        <p className="text-white text-sm">Upload your image</p>
      </label>
    </div>
  );
};

export default UploadButton;
