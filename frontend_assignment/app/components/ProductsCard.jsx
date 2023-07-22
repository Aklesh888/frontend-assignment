"use client"
import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Star } from "react-feather";
import { CartContext } from "../context/ShopContext";
import { useContext } from "react";

const ProductsCard = (props) => {
  const { addToCart, removeFromCart} = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (event) => {
    addToCart(props.id);
    setAddedToCart(true);
  };
  const handleRemoveFromCart = (event) => {
    removeFromCart(props.id);
    setAddedToCart(false);
  };

  return (
    <div className="flex flex-col p-5 m-5 h-[550px] justify-center w-[450px] space-y-5 bg-zinc-700 rounded-lg  text-left hover:bg-zinc-500 border border-zinc-500">
      <img
        className="h-72 w-72 rounded-md self-center"
        src={props.img}
        alt=""
      />
      <Link
        href={`/products/${props.id}`}
        key={props.id}
        className="font-bold text-xl min-h-[50px]"
      >
        {props.name}
      </Link>
      <Link
        href={`/products/${props.id}`}
        key={props.id}
        className="text-xl text-gray-300"
      >
        {props.category.toUpperCase()}
      </Link>
      <div
        className="flex justify-between items-center space-x-5"
        onClick={() => addToCart(props.id)}
      >
        <div className="text-2xl font-bold">${props.price}</div>
        <div
          className={`text-xl bg-blue-900 flex items-center justify-center space-x-4 cursor-pointer rounded p-5 text-center hover:bg-blue-600 ${
            addedToCart ? "hidden" : ""
          }`}
          onClick={handleAddToCart}
        >
          <ShoppingBag className="text-white" />
          <div className="self-center">Add to cart</div>
        </div>
        <div
          className={`text-xl bg-green-900 flex items-center justify-center space-x-4 cursor-pointer rounded p-5 text-center hover:bg-green-600 ${
            addedToCart ? "" : "hidden"
          }`}
          onClick={handleRemoveFromCart}
        >
          <Star className="text-white" />
          <div className="self-center">Added to cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
