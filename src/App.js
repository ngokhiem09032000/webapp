import "./App.css";
import BoxList from "./components/BoxList";
import Button from "./components/button/Button";
import TestReducer from "./components/TestReducer";
import Toggle from "./components/Toggle";
import "./components/button/Button.scss";
import Card from "./components/card/Card";
import Example from "./components/Exemple";
import "./index.css";
import Photo from "./components/Photo";

function App() {
  return (
    <div>
      {/* <BoxList>
        <h2>hello world</h2>
      </BoxList>
      <Toggle></Toggle> */}
      {/* <TestReducer></TestReducer> */}
      {/* <Button>primary</Button>
      <Button className="button--secondary">secondary</Button> */}
      {/* <Card></Card> */}
      <Example></Example>
      {/* <Photo></Photo> */}
    </div>
  );
}

export default App;
