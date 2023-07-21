"use client";
/**
 * The SearchPopup component allows users to search for products with various filters.
 * It fetches data using react-query and displays search results based on user input.
 */
import React, { useState, useEffect } from "react";
import { Search, Delete, Filter } from "react-feather";
import { ProductsFetch } from "@/lib/ProductsFetch";
import { useQuery } from "react-query";
import SearchResult from "../components/SearchResult";
import { Loader } from "react-feather";

const SearchPopup = () => {
  // Fetch product data using react-query
  const { data, status } = useQuery("items", ProductsFetch);

  // State variables for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showResults, setShowResults] = useState(false);
  // Hide search results when the search term changes
  useEffect(() => {
    setShowResults(false);
  }, [searchTerm]);

  if (status === "loading") {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <Loader className="animate-spin self-center" color="white" size={40} />
      </div>
    );
  }
  // Handle the opacity of the search button based on whether there's a search term

  const handleOpacity = () => {
    if (searchTerm === "") {
      return 0.5;
    } else {
      return 1;
    }
  };
  // Handle the search button click
  const handleSearch = () => {
    setShowResults(true);
  };
  // Filter the product data based on the search term and price range
  const filteredData = data.filter((item: any) => {
    const titleMatch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const priceMatch =
      (minPrice === "" || item.price >= minPrice) &&
      (maxPrice === "" || item.price <= maxPrice);
    return titleMatch && priceMatch;
  });

  return (
    <div className=" flex justify-center flex-col w-full items-center">
      <div className="md:text-3xl text-2xl text-center h-[30px] font-semibold mt-2">
        Search for products
      </div>
      <div className="flex h-92 rounded-md flex-col bg-zinc-500 transition-all  m-10 text-white w-auto">
        <div
          className={`px-4 m-4 h-12 md:w-auto w-auto flex justify-between rounded border border-blue-400`}
        >
          <div className="flex justify-center items-center">
            <Search />
            <input
              className="px-5 bg-zinc-500 lg:w-[45vw] md:w-[30vw] placeholder:text-xl placeholder:text-white h-6 outline-none"
              type="text"
              value={searchTerm}
              placeholder="Search"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className="flex justify-center space-x-3 py-3">
            <div className="hidden items-end justify-end h-full pt-7 md:flex">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
                className="border border-gray-300 rounded-md p-1 focus:outline-none w-14"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
                className="border border-gray-300 rounded-md p-1 focus:outline-none w-14"
              />
            </div>

            <Delete
              opacity={handleOpacity()}
              size={20}
              onClick={() => setSearchTerm("")}
            />
            <button
              className="rounded-full bg-gray-200 text-gray-700 px-3"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        {showResults && (
          <div className="flex flex-col w-auto space-y-3 px-5 py-3 overflow-auto">
            {filteredData.map((item: any) => (
              <div key={item.id}>
                <SearchResult
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPopup;
