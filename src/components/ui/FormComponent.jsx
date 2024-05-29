import { createContext, useContext } from "react";

const FormContext = createContext(null);
const FormElement = ({
  className,
  label,
  errors,
  register,
  children,
  ...rest
}) => {
  const { name } = register || {};
  const providerValues = {
    label,
    register,
    ...rest,
  };
  return (
    <FormContext.Provider value={providerValues}>
      <div className={`relative ${className}`}>
        <label
          htmlFor={label}
          className="block mb-2 font-semibold text-gray-500"
        >
          {label}
        </label>
        {children}
        {errors[name] && (
          <span className="text-red-500 text-xs">{errors[name]?.message}</span>
        )}
      </div>
    </FormContext.Provider>
  );
};

export const Input = () => {
  const { label, register, ...rest } = useContext(FormContext);
  return (
    <input
      id={label}
      {...register}
      className="custom-input"
      placeholder={`Enter ${label}`}
      {...rest}
    />
  );
};

export const Textarea = () => {
  const { label, register, ...rest } = useContext(FormContext);
  return (
    <textarea
      {...register}
      id={label}
      className="custom-input"
      placeholder={`Enter ${label}`}
      {...rest}
    ></textarea>
  );
};

export default FormElement;
