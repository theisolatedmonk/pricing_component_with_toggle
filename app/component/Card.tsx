import React from 'react'

type CardType = {

    mainColorClass: string
    buttoColorClass: string
    title: string
    price: number
    storages: string
    users: number
    senddata: number


}

export default function Card(props: CardType) {
    return (
        <div className={`flex flex-col h-80 w-56  rounded-md p-6 items-center justify-between ${props.mainColorClass}`}>
            <p className="">{props.title}
            </p>
            <p className='text-4xl text-[hsl(232,13%,33%)]'>${props.price}</p>
            <hr className='bg-[hsl(234,14%,74%)] h-[1.5px] w-full' />
            <p className="">{props.storages}Storage</p>
            <hr className='bg-[hsl(234,14%,74%)] h-[1.5px] w-full' />
            <p className="">{props.users} User Allowed</p>
            <hr className='bg-[hsl(234,14%,74%)] h-[1.5px] w-full' />
            <p className="">Send up to {props.senddata} GB</p>
            <hr className='bg-[hsl(234,14%,74%)] h-[1.5px] w-full' />

            <button className={`p-1  w-full rounded-md hover:outline ${props.buttoColorClass}`}>Learn More</button>
        </div>
    )
}