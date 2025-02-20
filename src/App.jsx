import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
