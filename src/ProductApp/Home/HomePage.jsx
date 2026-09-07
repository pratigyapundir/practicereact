import React, { useState } from "react";
import ProductsList from "./ProductsList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const [toggle, setToggle] = useState(false);
  const navigate=useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="min-h-screen ">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-6 py-20 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
              Welcome to MyStore
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Discover Products
              <span className="block text-blue-300">
                You’ll Love
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Explore our collection of quality products at affordable
              prices. Find everything you need in one place.
            </p>

            {/* Toggle Button */}

            <button
              onClick={()=>navigate('/product')}
              className="mt-8 rounded-lg bg-white px-8 py-3 font-bold text-blue-900 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
            >
            Explore Product
            </button>

          </div>

        </div>

      </section>

{/* Features */}

<section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">

  {/* Easy Search */}

  <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

    <div className="text-3xl">🔍</div>

    <h3 className="mt-3 font-bold text-gray-900">
      Easy Search
    </h3>

    <p className="mt-2 text-sm text-gray-500">
      Quickly find your favorite products with our easy search.
    </p>

  </div>


  {/* Wide Collection */}

  <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

    <div className="text-3xl">🛍️</div>

    <h3 className="mt-3 font-bold text-gray-900">
      Wide Collection
    </h3>

    <p className="mt-2 text-sm text-gray-500">
      Explore a wide range of products across different categories.
    </p>

  </div>


  {/* Best Prices */}

  <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

    <div className="text-3xl">💰</div>

    <h3 className="mt-3 font-bold text-gray-900">
      Best Prices
    </h3>

    <p className="mt-2 text-sm text-gray-500">
      Discover great products at affordable and competitive prices.
    </p>

  </div>


  {/* Product Reviews */}

  <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

    <div className="text-3xl">⭐</div>

    <h3 className="mt-3 font-bold text-gray-900">
      Product Ratings
    </h3>

    <p className="mt-2 text-sm text-gray-500">
      Check product ratings and reviews before making your choice.
    </p>

  </div>

</section>
<section className="bg-gray-50 px-6 py-16">

  <div className="mx-auto max-w-7xl">

    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Explore
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        Popular Categories
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

      <div className="cursor-pointer rounded-xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="text-5xl">💄</div>
        <h3 className="mt-4 font-bold">Beauty</h3>
      </div>

      <div className="cursor-pointer rounded-xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="text-5xl">📱</div>
        <h3 className="mt-4 font-bold">Electronics</h3>
      </div>

      <div className="cursor-pointer rounded-xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="text-5xl">👕</div>
        <h3 className="mt-4 font-bold">Fashion</h3>
      </div>

      <div className="cursor-pointer rounded-xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="text-5xl">🏠</div>
        <h3 className="mt-4 font-bold">Home</h3>
      </div>

    </div>

  </div>

</section>
<section className="px-6 py-16">

  <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-900 px-8 py-14 text-white">

    <div className="max-w-2xl">

      <p className="font-semibold uppercase tracking-widest text-blue-200">
        Limited Offer
      </p>

      <h2 className="mt-3 text-4xl font-extrabold">
        Discover Amazing Deals
      </h2>

      <p className="mt-4 text-blue-100">
        Find your favorite products and enjoy amazing prices
        on selected items.
      </p>

      <button
        onClick={()=>navigate("/product")}
        className="mt-7 rounded-lg bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
      >
        Shop Now →
      </button>

    </div>

  </div>

</section>
<section className="px-6 py-16">

  <div className="mx-auto max-w-7xl">

    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Why MyStore
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        Shopping Made Simple
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-xl border bg-white p-7">
        <span className="text-3xl">🛒</span>
        <h3 className="mt-4 text-xl font-bold">
          Easy Shopping
        </h3>
        <p className="mt-2 text-gray-500">
          Browse products and find what you need without
          unnecessary complexity.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-7">
        <span className="text-3xl">📦</span>
        <h3 className="mt-4 text-xl font-bold">
          Detailed Products
        </h3>
        <p className="mt-2 text-gray-500">
          View prices, ratings, stock, descriptions and
          other product information.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-7">
        <span className="text-3xl">❤️</span>
        <h3 className="mt-4 text-xl font-bold">
          Made For You
        </h3>
        <p className="mt-2 text-gray-500">
          Discover products that match your needs and
          shopping preferences.
        </p>
      </div>

    </div>

  </div>

</section>


    </div>
  );
};

export default HomePage;