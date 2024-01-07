import React from 'react'
import { robot } from "../assets";
import { useState } from 'react';
import styles from "../style";

const PaymentForm = () => {
  const itemPrice = 1.05
  const itemName = "USDt"
  const [quantity, setQuantity] = useState(1);
  const[finalAmount, setFinalAmount] = useState(quantity*itemPrice);
  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setFinalAmount(prevAmount => {
      const newAmount = (quantity + 1) * itemPrice;
      return Number(newAmount.toFixed(2)); 
    });
    
  }

  const decrement = () => {
    if(quantity <=1){
      setQuantity(1);
      setFinalAmount(itemPrice);
    }
    if(quantity > 1){
      setQuantity(quantity - 1);
      setFinalAmount(prevAmount => {
        const newAmount = (quantity - 1) * itemPrice;
        return Number(newAmount.toFixed(2)); 
      });
    }
  }
    const checkout = () => {
      fetch("http://localhost:3000/api/checkout", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        mode:"cors",
        body: JSON.stringify({
          items: [
            {id:1, quantity: quantity, price: itemPrice, name: itemName}
          ]
        })
      })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({url})=>{
        window.location = url
      })
      .catch(e => {
        console.log(e.error)
      })
    }
  
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="bg-primary w-full overflow-hidden text-white">
          <div className='flex flex-col  w-full py-8 wrapper-outer'>
            <div className='text-3xl text-white font-semibold my-6'>
                price:&nbsp;&nbsp;${itemPrice}
            </div>
            <small className='mt-10 mb-3 font-semibold'>Add Quantity</small>
            <div className='flex text-slate-900 justify-center items-center mb-10'>
                <span onClick={decrement} className='select-none w-auto px-4
                py-2 text-5xl bg-red-100 cursor-pointer'>-</span>
                <span className='w-auto px-4 py-2 text-white font-semibold text-3xl'>{quantity}</span>
                <span onClick={increment} className='select-none w-auto px-4 py-2 text-5xl bg-green-100 
                cursor-pointer'>+</span>
            </div>

            <div className='my-6 text-xl'>Amount to be paid:
            <span className='text-green-500 text-3xl font-bold pl-3'>${finalAmount}</span></div>
            <div className='my-6'>
            <button onClick={checkout} className='bg-blue-gradient text-white px-8 py-4 rounded-md text-2xl 
            font-semibold'>
                Checkout
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default PaymentForm