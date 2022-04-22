import { useEffect } from "react";
import Navbar from "./components/Navbar";
import React from "react";
import Board from "./components/admin/Board";
import Dictator from "./components/admin/Dictator";

function App() {
  useEffect(() => {
    console.log("hello world");
  }, []);
  return (
    <div className="">
      {/* <Navbar /> */}
      {/* <Board /> */}
      <Dictator />
    </div>
  );
}

export default App;
