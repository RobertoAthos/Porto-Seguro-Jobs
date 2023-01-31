import Link from 'next/link'
import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { SlSocialInstagram } from 'react-icons/sl'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8">
    <div className="w-full max-w-[1000px] m-auto p-10 flex flex-wrap justify-around">
      <div>
        <h3 className="font-bold text-3xl">Porto Seguro Jobs</h3>
      </div>
      <ul className="leading-10">
        <li className="hover:underline">
          <Link href="/">Sobre a plataforma</Link>
        </li>
        <li className="hover:underline">
          <Link href="/">Criar conta como candidato</Link>
        </li>
        <li className="hover:underline">
          <Link href="/">Criar conta como empresa</Link>
        </li>
        <li className="hover:underline">
          <Link href="/">Nossa inteligência artificial</Link>
        </li>
        <li className="hover:underline">
          <Link href="/">Dar sugestões</Link>
        </li>
      </ul>
    </div>
    <div className="w-full border-t border-t-gray-500">
      <div className="w-full max-w-[900px] m-auto flex justify-center items-center p-4">
        <Link href="/">
          <SlSocialInstagram className="text-3xl m-2" />
        </Link>
        <Link href="/">
          <AiOutlineFacebook className="text-3xl m-2" />
        </Link>
      </div>
    </div>
  </footer>
  )
}
