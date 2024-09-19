import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "t1": {
      const { strtam, testnha } = state;
      console.log(testnha, strtam);
      const stateJson = { ...state }; // tạo bản sao của state
      stateJson.testnha = "111";
      stateJson.strtam = "đây là button 1";
      return stateJson;
    }
    case "t2": {
      const stateJson = JSON.parse(JSON.stringify(state));
      stateJson.testnha = "222";
      stateJson.strtam = "đây là button 2";
      return stateJson;
    }
    case "t3": {
      const stateJson = JSON.parse(JSON.stringify(state));
      stateJson.testnha = "333";
      stateJson.strtam = "đây là button 3";
      return stateJson;
    }
    default:
      return state;
  }
}

const TestReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    strtam: "khởi đầu",
    testnha: "000",
  });
  const actionClick = (index) => {
    dispatch({
      type: index,
    });
  };
  return (
    <div>
      <h1>{state.strtam}</h1>
      <h1>{state.testnha}</h1>
      <button onClick={() => actionClick("t1")}>button 1</button>
      <button onClick={() => actionClick("t2")}>button 2</button>
      <button onClick={() => actionClick("t3")}>button 3</button>
    </div>
  );
};

export default TestReducer;
