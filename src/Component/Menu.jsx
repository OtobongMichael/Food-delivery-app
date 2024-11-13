import React, { useState } from 'react'
import images4 from '../assets/Images/Logo (3).png';
import MinusIcon from './reusables/icons/MinusIcon';
import AdditionIcon from './reusables/icons/AdditionIcon';
import images5 from '../assets/Images/Logo (4).png';

function Delivery() {
    const delivery = [
        {
            img: images4,
            name: "Poke with salmon",
            price: "₦1,500"
        },
        {
            img: images4,
            name: "Poke with salmon",
            price: "₦1,500"
        },
        {
            img: images4,
            name: "Poke with salmon",
            price: "₦1,500"
        },
        {
            img: images4,
            name: "Poke with salmon",
            price: "₦1,500"
        },
        {
            img: images4,
            name: "Poke with salmon",
            price: "₦1,500"
        },

    ]
    const [increment, setIncrement]=useState(3)
    const [decrement, setDecrement]=useState(3)
    
    return (
        <div>
            <div>
                {delivery.map((item) => (
                    <div className="border-b-2 flex justify-center gap-6 items-center mt-4  py-3">
                        <img src={item.img} alt="Logo(3).png" className='w-[80px] h-[80px] ' />
                        <div className='leading-5'>
                            <p className='text-[#666666] font-[501] text-[18px]'>{item.name}</p>
                            <p className='text-[#404040] font-[501]'>{item.price}</p>
                            <div className='flex  gap-5 my-2'>
                                <button className='cursor-pointer' onClick={()=>setDecrement((decrement) -1)}>
                                    
                                    
                                    <MinusIcon />
                                </button>
                                <p className='text-[#7B7B7B] text-[18px]'>{increment }</p> 
                                <button className='cursor-pointer' onClick={()=> setIncrement((increment) + 1)}>
                                    <AdditionIcon />
                                    {/* {count} */}
                                   
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute z-1 bottom-0 bg-[#F5EAD6] items-center py-3'>

                <div className='flex justify-between px-3 py-2 text-[#666666]'>
                    <p>Subtotal</p>
                    <p>N10,500.00</p>
                </div>
                <div className='flex justify-between px-3 py-2 text-[#666666]'>
                    <p >Discounts</p>
                    <p>-N3,500.00</p>
                </div>
                <svg width="317" height="1" viewBox="0 0 317 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="317" y2="0.5" stroke="#D1D1D1" />
                </svg>
                <div className='flex justify-between px-3 py-2 text-[#666666]'>
                    <p>Total</p>
                    <p>N7,500.00</p>
                </div>
                <button className='flex items-center bg-[#CF9832] ml-[0.9rem] px-[6.5rem] py-[8px] mt-[2.5rem] gap-[8px] rounded-full'>
                    <div>
                        <img src={images5} alt="Logo(4).png" />
                    </div>
                    <p className='text-white text-sm'>Checkout</p>
                </button>
            </div>
        </div>
    )
}

export default Delivery