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

  // const mapedUi = Pricing.map((d) => <Card className={'  rounded-r-none '} buttoClassName={''} title={''} price={d.Price.Annually} storages={''} users={0} senddata={0} />)
  return (


    <div className="h-screen w-full bg-[hsl(236,15%,82%)] text-[15px] font-Montserrat justify-center items-center flex flex-col gap-6 relative">
      <Image className='fixed right-0 top-0 w-60 z-0 fill-black' src={'/bg-top.svg'} alt={''} width={50} height={50} />
      <Image className='fixed left-0 bottom-0 w-60 z-0' bg-black src={'/bg-bottom.svg'} alt={''} width={50} height={50} />
      <div className=" flex flex-col justify-center items-center gap-6 text-grayish">
        <h2 className='text-3xl'>Our Pricing</h2>
        <div className="flex gap-2">
          <p className="">Annually</p>


          <Switch onClick={togglewitch} isOpen={priceCategory === 'monthly'} />


          <p className="bg-none ">Monthly</p>
        </div>
      </div>

      <div className="flex justify-center items-center z-10">
        {/* 
        {mapedUi} */}

        <Card className={'  rounded-r-none '} buttoClassName={''} title={'Basic'} price={priceCategory === 'annualy' ?
          '19.00' : '199.99'} storages={''} users={0} senddata={0} priceClassName={''} />


        <Card className=' bg-linear-gradient text-white h-[440px] w-[300px] ' buttoClassName='bg-white hover:bg-darkblue  hover:outline-white text-darkblue  hover:text-white' title={'Professional'}

          price={priceCategory === 'annualy' ?
            '24.99' : '249.99'} storages={''} users={0} senddata={0} priceClassName={'text-white'} />

        <Card className={' rounded-l-none'} buttoClassName={''} title={'Master'} price={priceCategory === 'annualy' ?
          '39.00' : '399.99'} storages={''} users={0} senddata={0} priceClassName={''} />
      </div>
    </div>
  )
}
