"use client";
import Image from "next/image";
import { ProductsFetch } from "../lib/ProductsFetch";
import { Loader } from "react-feather";
import { useQuery } from "react-query";
import ProductsCard from "./components/ProductsCard";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

export default function Home() {
  const { data, status } = useQuery<Product[]>("products", () => {
    return ProductsFetch();
  });


  return (
    <main className="">
      <div className="flex justify-center mb-4"></div>

      {status === "loading" && (
        <div className="flex justify-center animate-spin items-center">
          <Loader size={52} />
        </div>
      )}
      {status === "error" && <p>Error fetching data</p>}

      {status === "success" && (
        <div className="flex flex-wrap items-center justify-center">
          {data.map((item) => (
            <ProductsCard
              key={item.id}
              id={item.id}
              img={item.image}
              item={item}
              name={item.title}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
      )}
    </main>
  );
}
