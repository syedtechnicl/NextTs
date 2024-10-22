"use client";
import React from "react";
import Link from "next/link";
import "../Styles/Navbar.css";
import { useSelector } from "react-redux";

interface CartItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  title: string;
}

const NavBar = () => {
  const selector = useSelector((state: { card: CartItem[] }) => state.card);
  return (
    <div className="main-div">
      <h1>NextJs Typescript And Redux Learning</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="../Cards">Cart</Link>
        <span>Cart Item: {selector.length}</span>
      </div>
    </div>
  );
};

export default NavBar;
