
const ShortBanner = ({ header, text, banner }) => {
  return (
    <div
      className={`${banner} w-full object-fill  bg-no-repeat bg-cover h-[450px] text-white flex flex-col items-center justify-center bg-black/25 bg-blend-overlay gap-4`}
    >
      <h1 className="text-4xl font-bold ">{header}</h1>
      <p className="max-w-[80ch] text-center text-lg">{text}</p>
    </div>
  );
};

export default ShortBanner;
