import Input from "./components/input";
import useTemp from "./hooks/useTemp";

function App() {
  const [temp, dispatch] = useTemp();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Temperature Converter
        </h1>
        <div className="flex gap-x-4 justify-center">
          <Input
            id="celsius"
            value={temp.celsius}
            onChange={(event) =>
              dispatch({
                type: "set_fahrenheit",
                payload: event.currentTarget.value,
              })
            }
          />
          <Input
            id="fahrenheit"
            value={temp.fahrenheit}
            onChange={(event) =>
              dispatch({
                type: "set_celsius",
                payload: event.currentTarget.value,
              })
            }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
