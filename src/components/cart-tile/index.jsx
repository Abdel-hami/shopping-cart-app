import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cart-slice';

export default function ProductTile({ cartItem }) {
    const dispatch = useDispatch()
    function handlRemoveCart(){
        dispatch(removeFromCart(cartItem.id));
    }
    return (
        <>
            <div className='flex items-center p-5 justify-between bg-red-600 mt-2 mb-2 rounded-xl'>
                <div className='flex p-3'>
                    <img src={cartItem.image} className='h-28 rounded-lg ' alt="" />
                    <div className='ml-10 self-start space-y-5'>
                        <h1 className='text-xl text-white font-bold'>{cartItem.title}</h1>
                        <p className='text-white font-extrabold'>{cartItem.price}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full mt-3'>
                    <button
                        onClick={handlRemoveCart}
                        className='bg-red-900 text-white text-xl p-4 font-semibold rounded-md'>
                        remove from cart
                       
                    </button>
                </div>
            </div>
        </>
    )
}
