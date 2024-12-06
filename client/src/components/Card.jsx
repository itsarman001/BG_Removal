const Card = ({ title, subTitle, altText, src }) => {
  return (
    <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
      <img src={src} alt={altText} className="max-w-9"/>
      <div>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-neutral-500 mt-1">{subTitle}</p>
      </div>
    </div>
  );
};

export default Card;
