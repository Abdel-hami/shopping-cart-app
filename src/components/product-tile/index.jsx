import React from 'react'

export default function PeoductTile({ product }) {
    console.log(product)
    return (
        <div className='group border-2 border-red-900 p-4 rounded-xl flex flex-col items-center justify-center gap-6 h-[360px] text-center mt-10 ml-5'>
            <div className='h-[180px]' >
                <img src={product.image} className='h-full w-full object-cover' alt="" />
            </div>
            <p className='truncate text-gray-700 font-boldtext-lg w-40 '>{product.title}</p>
            <div className='flex items-center justify-center w-full mt-3'>
                <button className='bg-red-900 text-white text-xl p-4 font-semibold rounded-md'>Add to cart</button>
            </div>
        </div>
    )
}
