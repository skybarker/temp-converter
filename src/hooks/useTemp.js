import { useReducer } from "react";
import tempReducer from "./tempReducer";

export default () => {
  console.log("useTemp");
  const [temp, dispatch] = useReducer(tempReducer, {
    celsius: 0,
    fahrenheit: 32,
  });

  console.log(temp);

  return [temp, dispatch];
};
