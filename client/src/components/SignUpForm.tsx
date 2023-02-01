import React, { useState } from "react";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import {setRegister} from '../state'

export default function SignUpForm() {

  const [isLoading, setIsLoading] = useState(false);
  const[fullName,setFullName]=useState('')
  const[email,setEmail] = useState('')
  const[tel,setTel]=useState('')
  const[location,setLocation]=useState('')
  const[pic,setPic]=useState('')
  const[password,setPassword]=useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const registerResponse = await axios.post('http://localhost:5000/api/createUser',{
        fullName,
        email,
        tel,
        location,
        password,
        pic
      })
      const registered = await registerResponse.data
      dispatch(setRegister(registered))
      setIsLoading(false)
      console.log(registered)
      toast.success('Cadastro realizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }



  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className="text-white font-bold text-xl mb-[10px] mt-[20px]">
        Nome
      </label>
      <input
        type="text"
        placeholder="digite seu nome completo"
        className="w-[450px] outline-none p-2 rounded-sm text-xl text-gray-700"
        name="fullName"
        onChange={e=>setFullName(e.target.value)}
        value={fullName}
      />
      <label className="text-white font-bold text-xl mb-[10px] mt-[20px]">
        Email
      </label>
      <input
        type="email"
        placeholder="digite um email válido"
        className="w-[450px] outline-none p-2 rounded-sm text-xl text-gray-700"
        name="email"
        onChange={e=>setEmail(e.target.value)}
        value={email}
      />
      <label className="text-white font-bold text-xl mb-[10px] mt-[20px]">
        Telefone para contato
      </label>
      <input
        type="text"
        placeholder="coloque seu telefone whatsappp"
        className="w-[450px] outline-none p-2 rounded-sm text-xl text-gray-700"
        name="tel"
        onChange={e=>setTel(e.target.value)}
        value={tel}
      />
      <label className="text-white font-bold text-xl mb-[10px] mt-[20px]">
        Localização
      </label>
      <input
        type="text"
        placeholder="Digite em qual região você mora, ex: Porto Seguro, Trancoso..."
        className="w-[450px] outline-none p-2 rounded-sm text-xl text-gray-700"
        name="location"
        onChange={e=>setLocation(e.target.value)}
        value={location}
      />
      <label className="text-white font-bold text-xl mb-[10px] mt-[20px]">
        Senha
      </label>
      <input
        type="password"
        placeholder="digite uma senha forte"
        className="w-[450px] outline-none p-2 rounded-sm text-xl text-gray-700"
        name="password"
        onChange={e=>setPassword(e.target.value)}
        value={password}
      />
      <label className="text-white font-bold text-xl mb-[10px] mt-[20px]">
        Foto de perfil
      </label>
      <input
        type="file"
        className="text-white mb-[20px]"
        name="pic"
        onChange={e=>setPic(e.target.value)}
        value={pic}
      />
        {isLoading ? (
          <Loader/>
        ) : (
          <button
          type="submit"
          className="bg-primary-700 hover:bg-primary-800 p-2 text-white font-bold"
        >
          CRIAR CONTA
        </button>
        )}
        <ToastContainer/>
    </form>
  );
}
