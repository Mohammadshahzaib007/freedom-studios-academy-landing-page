import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="App" style={{ background: "black", height: "100vh" }}>
      <Text type="h1">Shahzaib</Text>

      <Button>Select a membership plan</Button>
    </div>
  );
}

export default App;
