import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const LIMIT = 8;

const ProductsList = () => {
  const navi = useNavigate();

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [page, search]);

  async function fetchProducts() {
    try {
      const skip = (page - 1) * LIMIT;

      const url = search
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${LIMIT}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`;

      const resp = await axios.get(url);

      setProducts(resp.data.products);
      setTotal(resp.data.total);
    } catch (error) {
      console.log(error);
    }
  }

  // whenever the search term changes, jump back to page 1
  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">Our Products</h1>

      <div className="mx-auto mb-10 flex w-[90%] max-w-2xl gap-3">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Products */}
      <div className="mx-auto grid w-[90%] max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navi(`/product/${product.id}`)}
            className="cursor-pointer overflow-hidden rounded-xl bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-52 w-full object-contain"
            />
            <h2 className="mt-4 min-h-12 text-lg font-bold">{product.title}</h2>
            <p className="mt-2 line-clamp-2 text-sm text-gray-500">
              {product.description}
            </p>
            <p className="mt-3 text-sm capitalize text-gray-600">
              Category: {product.category}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="text-sm">⭐ {product.rating}</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-green-600">
              {product.availabilityStatus}
            </p>
            <button
              onClick={() =>navi(`/product/${product.id}`) }
              className="mt-4 w-full rounded-lg bg-black py-2.5 font-semibold text-white transition hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="mt-10 text-center text-gray-500">No products found.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mx-auto mt-10 flex w-[90%] max-w-7xl items-center justify-center gap-6">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="rounded-lg bg-black px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Prev
          </button>

          <span className="font-semibold">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="rounded-lg bg-black px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;