import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'

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
      <Sidebar sideBarOpenHandler = {sideBarOpenHandler} sideBarCloseHandler = {sideBarCloseHandler}>
      </Sidebar>
    </div>
  )
}

export default App
