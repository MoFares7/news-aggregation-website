import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useProSidebar } from "react-pro-sidebar";
import Sidebar from "./components/SideNav/sideNav";
import AppRoutes from "./routes";
import Navbar from "./components/SideNav/nav";

function App() {
  const { collapseSidebar, toggleSidebar, toggled, broken } = useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };

  return (
    <Router>
      <div id="app" style={{ height: "100vh", width: '100%', }}>
        {/* /   <Sidebar collapseSidebar={collapseSidebar} /> */}
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
{/* <h1
            onClick={() => {
              toggle();
            }}
            style={{ color: "white", marginLeft: "5rem" }}
          >
            React-Pro-Sidebar
          </h1>
          {toggled ? (
            <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
          ) : (
            <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
          )}
          {broken && (
            <h1 style={{ color: "white", marginLeft: "5rem" }}>Small screen</h1>
          )} */}