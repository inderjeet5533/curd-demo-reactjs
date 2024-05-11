import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import CreatContact from "./components/CreatContact";
import ShowContacts from "./components/ShowContacts";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/creatContact" element={<CreatContact />} />
          <Route path="/showContacts" element={<ShowContacts />} />
        </Routes>
      </Router>
    </div>

    // <>
    //   <div className="position-relative">
    //     <NavBar></NavBar>
    //     <Dashboard></Dashboard>
    //     <CreatContact></CreatContact>
    //     <ShowContacts></ShowContacts>
    //   </div>
    // </>
  );
}

export default App;
