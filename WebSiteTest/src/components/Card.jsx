import React from "react";
import "./Css/Card.css";
import CardItem from "./CardItem";

const Card = () => {
  return (
    <div className="cards">
      <h1>Ihtiyacizi Olan Savunma Bizde Kesin Mevcuttur!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Bosanma Alaninda Uzman Kadrosu"
              label="Bosanma"
              
              
            />
            <CardItem
              src="https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Agir Ceza Alaninda Uzman Kadrosu"
              label="Agir Ceza"
              
            />
            <CardItem
              src="https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Borç-alacak Alaninda Uzman Kadrosu"
              label="Borç-alacak"
              
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Tazminat Alaninda Uzman Kadrosu"
              label="Tazminat"
              
            />
            <CardItem
              src="https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Miras Alaninda Uzman Kadrosu"
              label="Miras"
              
            />
            <CardItem
              src="https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Sigorta Alaninda Uzman Kadrosu"
              label="Sigorta"
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
