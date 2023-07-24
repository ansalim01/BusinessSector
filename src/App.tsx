import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <div className="App">
      <PostContainer></PostContainer>
    </div>
  );
}

export default App;
