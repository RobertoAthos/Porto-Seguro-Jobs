import { useAuth } from "@/context/AuthProvider/useAuth";
import React,{useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import  Router  from 'next/router'

export default function LoginForm() {

  const auth = useAuth()
  const[isloading,setIsLoading] = useState(false)

  const initialState = {
    email: "",
    password: "",
  };

  const[formValues,setFormValues] = useState(initialState)

  const {email,password} = formValues

  const handleChange = (e:any)=>{
      setFormValues({...formValues, [e.target.name]:e.target.value})
  }

  const handleLogin = async(e:any)=>{
    e.preventDefault()
    setIsLoading(true)
    try {
      await auth.authenticate(email,password) 
      toast.success(`Olá, ${auth.email}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        Router.push('/dashboard')
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleLogin}>
      <label className="font-semibold text-gray-600 text-xl mb-3 mt-8">
        Email
      </label>
      <input
        type="email"
        className="w-[450px] outline-none p-2 text-xl border border-gray-300 rounded-lg"
        placeholder="Digite seu email"
        name='email'
        value={email}
        onChange={handleChange}
      />
      <label className="font-semibold text-gray-600 text-xl mb-3 mt-8">
        Senha
      </label>
      <input
        type="password"
        className="w-[450px] outline-none p-2 text-xl border border-gray-300 rounded-lg"
        placeholder="Digite sua senha"
        name='password'
        value={password}
        onChange={handleChange}
      />
      {isloading ? 'Carregando' : (
        <button
        type="submit"
        className="w-[450px] bg-primary-400 mt-4 hover:bg-primary-500 p-2 text-white font-bold"
      >
        ENTRAR
      </button>
      )}
      <ToastContainer/>
    </form>
  );
}
