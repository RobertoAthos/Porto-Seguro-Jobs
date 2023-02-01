import React,{useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { setLogin } from "@/state";
import axios from "axios";
import { useRouter } from "next/router";


export default function LoginForm() {

  const[isloading,setIsLoading] = useState(false)
  const[email,setEmail] = useState('')
  const[password,setPassord] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const loggedInResponse = await axios.post('http://localhost:5000/api/login',{
        email,
        password
      })
      const loggedIn = await loggedInResponse.data
      if(loggedIn){
        dispatch(
          setLogin({
            user:  loggedIn.user ,
            token: loggedIn.token
          })
        )
      }
      setIsLoading(false)
      console.log(loggedIn)
      router.push('/feed')
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit} >
      <label className="font-semibold text-gray-600 text-xl mb-3 mt-8">
        Email
      </label>
      <input
        type="email"
        className="w-[450px] outline-none p-2 text-xl border border-gray-300 rounded-lg"
        placeholder="Digite seu email"
        name='email'
        onChange={e=>setEmail(e.target.value)}
        value={email}
      />
      <label className="font-semibold text-gray-600 text-xl mb-3 mt-8">
        Senha
      </label>
      <input
        type="password"
        className="w-[450px] outline-none p-2 text-xl border border-gray-300 rounded-lg"
        placeholder="Digite sua senha"
        name='password'
        onChange={e=>setPassord(e.target.value)}
        value={password}
      />
      {isloading ? <Loader/> : (
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
