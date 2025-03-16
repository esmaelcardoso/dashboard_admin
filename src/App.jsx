import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import "./App.css";

const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const sideBarOpenHandler = () => {
    setSideBarOpen(true);
  };

  const sideBarCloseHandler = () => {
    setSideBarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sideBarOpen={sideBarOpen} sideBarOpenHandler={sideBarOpenHandler} />
      <Main />
      <Sidebar sideBarOpen={sideBarOpen} sideBarCloseHandler={sideBarCloseHandler} />
    </div>
  )
}

export default App
