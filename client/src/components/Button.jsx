const Button = ({ primary, onClick, children }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full ${
        primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-zinc-800 text-white hover:bg-zinc-700'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
