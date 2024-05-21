const formatNumber = (value) => {
  if (typeof value === "number") {
    if (Number.isInteger(value)) {
      return value.toString(); // Convert integer to string
    } else {
      return value.toFixed(2); // Keep two decimal places for floats
    }
  } else {
    return value;
  }
};

const useNumberFormatter = () => formatNumber;

export default useNumberFormatter;
