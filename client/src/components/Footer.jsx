import { BrandName } from './';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <div onClick={() => scrollToTop()}>
        <BrandName className="w-[150px]" />
      </div>

      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @arman | All right reserved.
      </p>

      <div className="flex gap-1">
        <a
          href="#"
          target="_blank"
          className="p-2 border-2 border-gray-200 rounded-full"
        >
          <Linkedin />
        </a>
        <a
          href="#"
          target="_blank"
          className="p-2 border-2 border-gray-200 rounded-full"
        >
          <Twitter />
        </a>
        <a
          href="#"
          target="_blank"
          className="p-2 border-2 border-gray-200 rounded-full"
        >
          <Github />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
