import React from 'react'

export default function InfoCardBox(props:{number:string, text:string}) {
  return (
    <div className='bg-white p-2 w-[280px] mb-5 h-[150px] border border-primary-700 flex justify-center items-center flex-col text-center'>
        <span className='text-primary-700 text-4xl font-bold'>+{props.number}</span>
        <p className='text-gray-700 font-semibold text-2xl'>{props.text}</p>
    </div>
  )
}
