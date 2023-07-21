import React from "react";
import Link from "next/link";

type props = {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

const SearchResult = (props: props) => {
  return (
    <Link href={`/search/${props.id}`} className="flex flex-row text-white w-auto max-w-[800px]">
      <div className="flex px-10 bg-zinc-700 hover:bg-zinc-600 rounded-md h-32 w-full">
        <img src={props.image} className="h-20 w-20 mr-2 my-1 rounded-sm" alt="" />
        <div className="flex flex-col">

        <div className="text-xl font-bold">{props.title} </div>
        <div className="text-sm">${props.price}</div>
        <div className="">{props.category}</div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;