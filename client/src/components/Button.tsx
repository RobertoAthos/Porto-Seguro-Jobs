import React from 'react'

export default function Button(props: {name:string}) {
  return (
    <button className='bg-primary-700 text-white p-[10px] mt-[1rem] rounded-sm hover:bg-primary-800'>{props.name}</button>
  )
}
