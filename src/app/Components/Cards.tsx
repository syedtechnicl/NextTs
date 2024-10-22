"use client";
import React, { useEffect, useState } from "react";
import "../Styles/card.css";
import { useDispatch } from "react-redux";
import { AddCard } from "../Reduxx/slicer";
interface CardItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  title: string;
}
const Cards: React.FC = () => {
  const [carddata, setcarddata] = useState<CardItem[]>([]);
  // console.log(carddata);
  const distapch = useDispatch();
  useEffect(() => {
    const fetchingData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const data2 = await data.json();
      setcarddata(data2);
    };
    fetchingData();
  }, []);
 const Add = (Add: CardItem) => {
    distapch(AddCard(Add));
  };

  return (
    <>
      <h1>Cardss</h1>
      {carddata.length > 0 ? (
        carddata.map((elem: CardItem) => (
          <div className="card" key={elem.id}>
            <img src={elem.image} alt={elem.title} className="card-image" />
            <h2 className="card-title">{elem.title}</h2>
            <h3 className="card-category">Category: {elem.category}</h3>
            <h4 className="card-price">Price: {elem.price}</h4>
            <button
              className="card-button"
              onClick={() => {
                Add(elem);
              }}
            >
              Add To Cart
            </button>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "red", fontSize: "200px" }}>
          Loading...
        </p>
      )}
    </>
  );
};

export default Cards;
