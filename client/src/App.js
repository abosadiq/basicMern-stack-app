import React from "react";
import "./App.css";
import Storage from "./components/Strorage";
import { ContextApi as Provider } from "./components/contextApi";
function App() {
  return (
    <div className="App">
      <Provider>
        <Storage />
      </Provider>
    </div>
  );
}

export default App;
