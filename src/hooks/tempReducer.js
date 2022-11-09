import { tryConvert } from "../utils/tryConvert";

export default function (state, action) {
  switch (action.type) {
    case "set_celsius":
      return { celsius: tryConvert(state.temp.fahrenheit, "convertToCelsius") };
    case "set_fahrenheit":
      return {
        fahrenheit: tryConvert(state.temp.celsius, "convertToFahrenheit"),
      };
    default:
      throw new Error("Invalid Action");
  }
}
