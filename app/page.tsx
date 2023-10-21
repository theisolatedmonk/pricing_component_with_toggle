'use client'
import Image from 'next/image'
import Card from './component/Card'
import { useState } from 'react'
import { clsx } from 'clsx';
import { Switch } from './component/Switch';
import { twMerge } from 'tailwind-merge'
import { Pricing } from './data';

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


  // console.log('pricing-', Pricing.map((d) => d.Pricing))

  // const mapedUi = Pricing.map((d) => <Card className={'  rounded-r-none '} buttonClassName={''} title={''} price={d.Price.Annually} storages={''} users={0} senddata={0} />)
  return (

    <>
      <div className="min-h-screen w-full  text-[15px] font-Montserrat justify-center items-center flex flex-col gap-6 p-4">

        <div className=" flex  flex-col justify-center items-center gap-6 text-grayish text-sm">
          <h2 className='text-2xl text-darkGray'>Our Pricing</h2>
          <div className="flex gap-2">
            <p className="">Annually</p>


            <Switch onClick={togglewitch} isOpen={priceCategory === 'monthly'} />


            <p className="bg-none ">Monthly</p>
          </div>
        </div>

        <div className="flex  sm:flex-row flex-col justify-center items-center z-10 text-sm gap-5 sm:gap-0">
          {/* 
        {mapedUi} */}

          <Card className={'  sm:rounded-r-none '} buttonClassName={'hover:bg-whiteImage'} title={'Basic'} price={priceCategory === 'annualy' ?
            '19.00' : '199.99'} storages={'500 GB'} users={2} senddata={3} priceClassName={''} />


          <Card className='bg-linear-gradient text-white sm:h-[340px] sm:w-[250px] w-[230px] py-[44px]' buttonClassName='bg-white hover:bg-darkblue  hover:outline-white text-darkblue  hover:text-white' title={'Professional'}

            price={priceCategory === 'annualy' ?
              '24.99' : '249.99'} storages={'1 TB'} users={5} senddata={10} priceClassName={'text-white'} />

          <Card className={'sm:rounded-l-none'} buttonClassName={'hover:bg-whiteImage'} title={'Master'} price={priceCategory === 'annualy' ?
            '39.00' : '399.99'} storages={'2 TB'} users={10} senddata={20} priceClassName={''} />
        </div>
      </div>
      <div className='fixed min-h-screen left-0 top-0 w-full bg-gray-300  -z-10' />
      <Image className=' fixed right-0 top-0 w-[230px]  fill-black' src={'/bg-top.svg'} alt={''} width={50} height={50} />
      <Image className='fixed  left-0 bottom-0 w-[220px] z' bg-black src={'/bg-bottom.svg'} alt={''} width={50} height={50} />




    </>
  )
}
