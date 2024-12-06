import { assets } from '../assets/assets';

const BrandName = ({ className }) => {
  return <img src={assets.logo} className={`${className}`} alt="" />;
};

export default BrandName;
