"use client"
import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'react-feather'

type props ={
  id: number;
  name: string;
  img: string;
  category: string;
  price: number;

}

const ProductsCard = (props: props) => {
  return (
    <Link
      href={`/products/${props.id}`}
      key={props.id}
      className="flex flex-col p-5 m-5 h-[550px] justify-center w-[450px] space-y-5 bg-zinc-700 rounded-lg  text-left hover:bg-zinc-500 border border-zinc-500"
    >
      <img className=" h-72 w-72 rounded-md self-center" src={props.img} alt="" />
      <div className=" font-bold text-xl min-h-[50px]">{props.name}</div>
        <div className="text-xl text-gray-300">{props.category.toUpperCase()}</div>
      <div className="flex justify-between items-center space-x-5">
        <div className=" text-2xl font-bold">${props.price}</div>
        <div className="text-xl bg-blue-900 flex items-center justify-center space-x-4 cursor-pointer rounded p-5 text-center hover:bg-blue-600">
          <ShoppingBag className="text-white" />
          <div className=" self-center">Add to cart</div>
        </div>
      </div>
    </Link>
  )
}

export default ProductsCard