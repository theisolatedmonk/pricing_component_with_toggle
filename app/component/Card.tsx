import React from 'react'
import { twMerge } from 'tailwind-merge'
import { cn } from '../cn'
type CardType = {

    className: string
    buttoClassName: string
    title: string
    price: number | string
    storages: string
    users: number
    senddata: number
    priceClassName: string


}

export default function Card(props: CardType) {
    return (
        <div className={cn(`flex flex-col h-[90%] w-[230px]  rounded-md p-6 items-center justify-between bg-veryLightGray text-grayish `, props.className)}>
            <p className="">{props.title}
            </p>
            <p className={cn(`text-5xl text-darkGray `, props.priceClassName)}>{props.price}</p>
            <hr className='bg-lightGray h-[1.5px] w-full' />
            <p className="">{props.storages}Storage</p>
            <hr className='bg-lightGray h-[1.5px] w-full' />
            <p className="">{props.users} User Allowed</p>
            <hr className='bg-lightGray h-[1.5px] w-full' />
            <p className="">Send up to {props.senddata} GB</p>
            <hr className='bg-lightGray h-[1.5px] w-full' />

            <button className={cn(` text-white w-full rounded-md hover:outline bg-linear-gradient hover:bg-white-gradient  hover:outline-darkblue hover:text-darkblue p-2 `, props.buttoClassName)}>Learn More</button>
        </div>
    )
}

// twMerge