import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";
import PetCards from "./Components/PetCards/PetCards";
import ShelterPage from "./Components/Shelters/ShelterPage";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/Events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/PetCards"
          element={
            <Layout>
              <PetCards />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/Shelters"
          element={
            <Layout>
              <ShelterPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
