const Input = ({ className, label, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={label} className="block mb-2 font-semibold text-gray-500">
        {label}
      </label>
      <input
        {...rest}
        id={label}
        className="custom-input"
        placeholder={`Enter ${label}`}
      />
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
