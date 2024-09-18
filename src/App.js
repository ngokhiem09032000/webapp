import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Com content="khiem"></Com>
      <Com content="Nhung an cuc"></Com>
    </div>
  );
}

function Com(props) {
  return <div className="boxcss">{props.content}</div>;
}

export default App;
