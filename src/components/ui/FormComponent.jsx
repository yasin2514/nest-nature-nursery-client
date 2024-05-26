import { FaCircleXmark } from "react-icons/fa6";

const Input = ({ className, label, ...rest }) => {
  const { cross } = rest || {};
  return (
    <div className={`relative ${className}`}>
      <label htmlFor={label} className="block mb-2 font-semibold text-gray-500">
        {label}
      </label>
      <input
        {...rest}
        id={label}
        className="custom-input"
        placeholder={`Enter ${label}`}
      />
      {cross && <FaCircleXmark  className="absolute top-12 right-3 text-red-500 text-lg cursor-pointer" />}
    </div>
  );
};

export const Textarea = ({ className, label, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={label} className="block mb-2 font-semibold text-gray-500">
        {label}
      </label>
      <textarea
        {...rest}
        id={label}
        className="custom-input"
        placeholder={`Enter ${label}`}
      ></textarea>
    </div>
  );
};

export default Input;
