"use client";
import React from "react";
import { useQuery } from "react-query";
import { Loader, ShoppingBag } from "react-feather";
import { singleProductFetch } from "@/lib/FetchSingleProduct";



const SearchResult = (props: any) => {
  const { data: product, status } = useQuery(
    ["singleProductFetch", props.params.id],
    () => singleProductFetch(props.params.id)
  );

  //checks the status of dara fetch
  if (status === "loading") {
    return (
      <div className=" h-screen flex items-center justify-center">
        <Loader className="animate-spin" size={50} />;
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center my-8 px-5 space-y-5">
      <div className="flex lg:flex-row flex-col justify-center items-center space-x-5">
        <img
          src={product.image}
          className=" md:h-[450px] md:w-[450px] h-[300px] w-[300px] rounded mx-3"
          alt=""
        />
        <div className="w-[600px] space-y-8 flex flex-col">
          <div className="md:text-4xl sm:text-3xl text-xl font-extrabold">
            {product.title}
          </div>
          <div className="my-2 md:text-xl text-lg font-semibold">
            Category: {product.category}
          </div>
          <div className="my-2 md:text-xl text-lg text-zinc-400">
            {product.description}
          </div>
          <div className="text-xl">Price: ${product.price}</div>
          <div className="text-xl bg-blue-900 flex items-center justify-center space-x-4 cursor-pointer rounded p-5 text-center hover:bg-blue-600">
            <ShoppingBag className="text-white" />
            <div className="">Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
