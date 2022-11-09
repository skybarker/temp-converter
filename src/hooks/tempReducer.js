import { tryConvert } from "../utils/tryConvert";

export default (state, action) => {
  switch (action.type) {
    case "set_celsius":
      console.log("celsius");

      return {
        ...state,
        celsius: tryConvert(action.payload, "convertToCelsius"),
        fahrenheit: action.payload,
      };
    case "set_fahrenheit":
      console.log("fahrenheit");

      return {
        ...state,
        celsius: action.payload,
        fahrenheit: tryConvert(action.payload, "convertToFahrenheit"),
      };
    default:
      return {
        ...state,
        celsius: state.celsius,
        fahrenheit: state.fahrenheit,
      };
  }
  // throw new Error("Invalid Action");
};
