import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Template from "./components/templateComponent";
import Modal from "./components/modal";
import Footer from "./components/footer";
import Newsletter from "./components/newsletter";
import data from "./assets/data.json";
import modalData from "./assets/modalData.json";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => setCards(data), []);

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
        <div className="challenges">
          {cards.length === 0 ? (
            <p>Templates are fetching...</p>
          ) : (
            cards.map(card => <Template card={card} key={card.id} />)
          )}
        </div>
        <Newsletter />
        <Footer />

      </div>
    </div>
  );
}

export default App;
