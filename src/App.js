import React from "react";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";
import DashBoardMain from "./pages/DashBoardMain";
import Page from "../src/pages/Upload/Page";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <main>
    <Routes>
    <Route path="/" element={<SignIn></SignIn>} />
    <Route path="/signup" element={<SignUp></SignUp>} />
    <Route path="/table" element={<Dashboard></Dashboard>} />
    <Route path="/page" element={<Page/>}/>
    <Route path ="/dashboard" element={<DashBoardMain></DashBoardMain>}></Route>
     </Routes> 
  </main>
  </>
  );
}

export default App;
