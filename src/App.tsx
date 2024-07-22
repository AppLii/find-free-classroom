import React from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import "./styles/general.scss";
import "./styles/header.scss";
import "./styles/main.scss";
import "./styles/footer.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
};

export default App;
