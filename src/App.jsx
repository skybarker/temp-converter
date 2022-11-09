import Input from "./components/input";
import useTemp from "./hooks/useTemp";

function App() {
  const [temp, dispatch] = useTemp();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Temperature Converter</h1>
      <Input
        label="Celsius"
        id="celsius"
        value={temp.celsius}
        onChange={(event) => {
          dispatch({ type: "set_fahrenheit" });
        }}
      />
      <Input
        label="Fahrenheit"
        id="fahrenheit"
        value={temp.fahrenheit}
        onChange={(event) => {
          dispatch({ type: "set_celsius" });
        }}
      />
    </div>
  );
}

export default App;
