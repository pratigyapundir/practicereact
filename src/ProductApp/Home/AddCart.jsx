import React, { useEffect, useState } from "react";

const AddCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: product.quantity + 1,
          }
        : product
    );

    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      )
      .filter((product) => product.quantity > 0);

    updateCart(updatedCart);
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter(
      (product) => product.id !== id
    );

    updateCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-8 text-center text-3xl font-bold">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <div className="text-6xl">🛒</div>

            <h2 className="mt-4 text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-5xl">

          <div className="space-y-4">

            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-6 rounded-xl bg-white p-5 shadow"
              >

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-24 w-24 object-contain"
                />

                <div className="flex-1">

                  <h2 className="text-lg font-bold">
                    {product.title}
                  </h2>

                  <p className="mt-1 text-gray-500">
                    ${product.price}
                  </p>

                  <div className="mt-3 flex items-center gap-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(product.id)
                      }
                      className="h-8 w-8 rounded bg-gray-200 font-bold hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="font-semibold">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(product.id)
                      }
                      className="h-8 w-8 rounded bg-gray-200 font-bold hover:bg-gray-300"
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-xl font-bold">
                    $
                    {(
                      product.price * product.quantity
                    ).toFixed(2)}
                  </p>

                  <button
                    onClick={() =>
                      removeProduct(product.id)
                    }
                    className="mt-2 text-sm font-semibold text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-8 flex justify-end">
            <div className="rounded-xl bg-white p-6 shadow">
              <p className="text-gray-500">
                Total
              </p>

              <p className="mt-1 text-3xl font-bold">
                ${totalPrice.toFixed(2)}
              </p>

              <button className="mt-4 w-full rounded-lg bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default AddCart;