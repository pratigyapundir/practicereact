import React, { useEffect, useState } from 'react'
import { useNavigate ,useParams} from 'react-router-dom'
import axios from 'axios';

const Details = () => {
    const {id}=useParams();
    const nav=useNavigate();
    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(true);
useEffect(()=>{
products()
},[id])
async function products() {
        try {
            setLoading(true)
            const resp=await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(resp.data)
            console.log(resp.data);
            
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false);
        }
    }
    if(loading){
       return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">
          Loading......
        </h1>
      </div>
    );
    }
    if(!product){
        
            return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Product not found
        </h1>
      </div>
        )
    }
   const handleAddToCart = () => {
  const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists
  const existingProduct = oldCart.find(
    (item) => item.id === product.id
  );

  let updatedCart;

  if (existingProduct) {
    // Increase quantity
    updatedCart = oldCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    // Add new product
    updatedCart = [
      ...oldCart,
      {
        ...product,
        quantity: 1,
      },
    ];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  alert("Product added to cart");
};
  return (
      <div className="min-h-screen bg-gray-100 p-8">

      {/* Back Button */}

      <button
        onClick={() => nav("/product")}
        className="mb-6 rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800"
      >
        ← Back to Products
      </button>


      {/* Product Container */}

      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-lg">

        <div className="grid gap-10 md:grid-cols-2">


          {/* LEFT SIDE - IMAGE */}

          <div className="flex items-center justify-center">

            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-[450px] w-full object-contain"
            />

          </div>


          {/* RIGHT SIDE - DETAILS */}

          <div>

            {/* Category */}

            <p className="text-sm font-semibold uppercase text-gray-500">
              {product.category}
            </p>


            {/* Title */}

            <h1 className="mt-2 text-4xl font-bold">
              {product.title}
            </h1>


            {/* Description */}

            <p className="mt-5 leading-7 text-gray-600">
              {product.description}
            </p>


            {/* Rating */}

            <div className="mt-5 flex items-center gap-3">

              <span className="rounded-md bg-yellow-100 px-3 py-1">
                ⭐ {product.rating}
              </span>

              <span className="text-gray-500">
                {product.reviews?.length || 0} Reviews
              </span>

            </div>


            {/* Price */}

            <h2 className="mt-6 text-3xl font-bold">
              ${product.price}
            </h2>


            {/* Brand */}

            <p className="mt-5">
              <span className="font-semibold">
                Brand:
              </span>{" "}
              {product.brand}
            </p>


            {/* Stock */}

            <p className="mt-3">
              <span className="font-semibold">
                Stock:
              </span>{" "}
              {product.stock}
            </p>


            {/* Availability */}

            <p className="mt-3 font-semibold text-green-600">
              {product.availabilityStatus}
            </p>


            {/* Minimum Order */}

            <p className="mt-3">
              <span className="font-semibold">
                Minimum Order:
              </span>{" "}
              {product.minimumOrderQuantity}
            </p>


            {/* Shipping */}

            <p className="mt-3">
              <span className="font-semibold">
                Shipping:
              </span>{" "}
              {product.shippingInformation}
            </p>


            {/* Warranty */}

            <p className="mt-3">
              <span className="font-semibold">
                Warranty:
              </span>{" "}
              {product.warrantyInformation}
            </p>


            {/* Return Policy */}

            <p className="mt-3">
              <span className="font-semibold">
                Return Policy:
              </span>{" "}
              {product.returnPolicy}
            </p>


            {/* Buttons */}

            <div className="mt-8 flex gap-4">

              <button
                onClick={handleAddToCart}
                className="rounded-lg bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800"
              >
                Add to Cart
              </button>

              <button
                onClick={()=>nav("/product")}
                className="rounded-lg border border-gray-300 px-8 py-3 font-semibold hover:bg-gray-100"
              >
                Continue Shopping
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Details