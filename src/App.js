import React from "react";
import './App.css';
import MainPage from "./components/MainPage/MainPage.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="fade-in">
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;