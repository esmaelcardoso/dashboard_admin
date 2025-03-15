import { useState } from "react";
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
      <h2>Dashboard Admin</h2>
    </div>
  )
}

export default App
