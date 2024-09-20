import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import ProductTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector(state => state);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])
  console.log(cart, totalCart);
  return <div className="flex justify-center">
    {
      cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {
                cart.map(cartItem => <ProductTile cartItem={cartItem} />)
              }
            </div>
          </div>
          <div className="flex flex-col justify-center items-end p-5 space-y-5">
            <h1 className="font-bold text-lg text-red-800">your cart summary</h1>
            <p>
              <span className="text-gray-800 font-bold">total items: </span>
              <span>:{cart.length}</span>
            </p>
            <p className="text-gray-800 font-bold">
              <span>total amount</span>
              <span>: {totalCart}</span>
            </p>
          </div>
        </>
      )
        :
        (<div className="flex flex-col justify-center items-center min-h-[80vh]">
          <h1 className="text-gray-800 font-bold text-xl mb-2">your card is empty</h1>
          <Link to={"/"}>
            <button className='bg-red-900 text-white text-xl p-4 font-semibold rounded-md'>shop now</button>
          </Link>
        </div>)
    }
  </div>
}
