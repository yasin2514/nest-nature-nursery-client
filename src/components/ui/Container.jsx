
const Container = ({ children, className }) => {
  return <div className={`w-full max-w-7xl px-4 mx-auto ${className}`}>{children}</div>;
};

export default Container;
