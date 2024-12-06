import { Link } from "react-router-dom";
import { BrandName, Button } from "./";
import { ArrowRight } from "lucide-react";
import { useUser, UserButton, useClerk } from "@clerk/clerk-react";

const Nav = () => {
  const { isSignedIn } = useUser(); 
  const { openSignIn } = useClerk(); 

  const handleGetStarted = () => openSignIn();

  return (
    <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <BrandName className="w-32 sm:w-44" />
      </Link>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <Button primary={false} onClick={handleGetStarted}>
          Get Started <ArrowRight />
        </Button>
      )}
    </nav>
  );
};

export default Nav;
