import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import "./styles/general.scss";
import "./styles/header.scss";
import "./styles/main.scss";
import "./styles/footer.scss";

const App: React.FC = () => {
  return (
    <Router basename="/find-free-classroom">
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <MainComponent />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
