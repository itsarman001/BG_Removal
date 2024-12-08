import { Link } from 'react-router-dom';
import { BrandName, Button } from './';
import { ArrowRight } from 'lucide-react';
import { useUser, UserButton, useClerk } from '@clerk/clerk-react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Nav = () => {
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();

  const { credit } = useContext(AppContext);

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  const handleGetStarted = () => openSignIn();

  return (
    <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <BrandName className="w-32 sm:w-44" />
      </Link>

      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700">
            <img
              src={assets.credit_icon}
              alt="Availaible Credits"
              className="w-5"
            />
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              Credits: {credit}
            </p>
          </button>
          <p className="text-gray-600 max-sm:hidden">Hi, {user.fullName}</p>
          <UserButton />
        </div>
      ) : (
        <Button primary={false} onClick={handleGetStarted}>
          Get Started <ArrowRight />
        </Button>
      )}
    </nav>
  );
};

export default Nav;
