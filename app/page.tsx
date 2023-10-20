'use client'
import Image from 'next/image'
import Card from './component/Card'
import { useState } from 'react'
import { clsx } from 'clsx';
import { Switch } from './component/Switch';


export default function Home() {

  // const [isOpen, setOpen] = useState(true)
  const [priceCategory, setPriceCategory] = useState('monthly')


  function togglewitch() {
    // setOpen(!isOpen)

    if (priceCategory === 'monthly')
      setPriceCategory('annualy')
    if (priceCategory === 'annualy')
      setPriceCategory('monthly')
  }
  return (


    <div className="h-screen w-full bg-[hsl(234,14%,74%)] text-[15px] font-Montserrat justify-center items-center flex flex-col gap-6 relative">
      <Image className='fixed right-0 top-0 w-60 z-0 ' src={'/bg-top.svg'} alt={''} width={50} height={50} />
      <Image className='fixed left-0 bottom-0 w-60 z-0' bg-black src={'/bg-bottom.svg'} alt={''} width={50} height={50} />
      <div className=" flex flex-col justify-center items-center gap-4">
        <h2>Our Pricing</h2>
        <div className="flex gap-2">
          <p className="">Annually</p>
          {priceCategory === '' ?
            '1monthly' : ''
          }


          <Switch onClick={togglewitch} isOpen={priceCategory === 'monthly'} />


          <p className="bg-none hover:outline">Monthly</p>
        </div>
      </div>

      <div className="flex justify-center items-center z-10">  <Card mainColorClass={'bg-[hsl(240,78%,98%)]  rounded-r-none text-[hsl(233,13%,49%)]'} buttoColorClass={'bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] hover:outline-[hsl(237,63%,64%)] hover:text-[hsl(237,63%,64%)] hover:bg-white'} title={''} price={1900} storages={''} users={0} senddata={0} />
        <Card mainColorClass={'bg-[hsl(237,63%,64%)] h-[350px] '} buttoColorClass={'bg-[hsl(240,78%,98%)] hover:bg-[hsl(237,63%,64%)]  hover:outline-[hsl(240,78%,98%)]  hover:text-[hsl(240,78%,98%)]'} title={''} price={0} storages={''} users={0} senddata={0} />
        <Card mainColorClass={'bg-[hsl(240,78%,98%)] rounded-l-none'} buttoColorClass={'bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] hover:bg-white  hover:outline-[hsl(237,63%,64%)] hover:text-[hsl(237,63%,64%)]'} title={''} price={0} storages={''} users={0} senddata={0} /></div>
    </div>
  )
}

