"use client";
import { useContext } from "react";
import { ProductsFetch } from "@/lib/ProductsFetch";
import { useQuery } from "react-query";
import ProductsCard from "../components/ProductsCard";
import { CartContext } from "../context/ShopContext";
import { Loader } from "react-feather";

const Carts = () => {
  const { data, status } = useQuery("data", ProductsFetch);
  const { cartItems } = useContext(CartContext);

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-black text-white h-900px bg-screen">
      <div className="text-5xl text-center py-10">Your cart items</div>
      <div className="flex h-auto w-screen flex-wrap justify-center items-center py-10">
        {data && data.length > 0 ? (
          data.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <ProductsCard
                  key={product.id}
                  name={product.title}
                  category={product.category}
                  price={product.price}
                  img={product.image}
                  id={product.id}
                />
              );
            } else {
              return <div key={product.id}></div>;
            }
          })
        ) : (
          <div>No products in the cart.</div>
        )}
      </div>
    </div>
  );
};

export default Carts