"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCard } from "../Reduxx/slicer";
interface CardItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  title: string;
}
const Page = () => {
  const mainvalue = useSelector((state: { card: CardItem[] }) => state.card);
  const dispatch = useDispatch();
  const Remove = (key: CardItem) => {
    dispatch(RemoveCard(key.id));
  };
  return (
    <div>
      {mainvalue.length > 0 ? (
        mainvalue.map((elem: CardItem) => (
          <div className="card" key={elem.id}>
            <img src={elem.image} alt={elem.title} className="card-image" />
            <h2 className="card-title">{elem.title}</h2>
            <h3 className="card-category">Category: {elem.category}</h3>
            <h4 className="card-price">Price: {elem.price}</h4>
            <button
              className="card-button"
              onClick={() => {
                Remove(elem);
              }}
            >
              remove
            </button>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "red", fontSize: "200px" }}>
          There is No Order
        </p>
      )}
    </div>
  );
};

export default Page;
