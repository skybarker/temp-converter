import { tryConvert } from "../utils/tryConvert";

export default (state, action) => {
  switch (action.type) {
    case "set_celsius":
      return {
        celsius: tryConvert(action.payload, "convertToCelsius"),
        fahrenheit: action.payload,
      };
    case "set_fahrenheit":
      return {
        celsius: action.payload,
        fahrenheit: tryConvert(action.payload, "convertToFahrenheit"),
      };
  }
};
