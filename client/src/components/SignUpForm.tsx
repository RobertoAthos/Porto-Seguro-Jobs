import { useAuth } from "@/context/AuthProvider/useAuth";
import React, { useState } from "react";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpForm() {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    fullName: "",
    email: "",
    tel: "",
    location: "",
    password: "",
    pic: "",
  };

  const [formValues, setFormValues] = useState(initialState);

  const { fullName, email, location, password, pic, tel } = formValues;

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await auth.register(fullName, email, tel, location, password, pic);
      setIsLoading(false);
      toast.success('Cadastro realizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form className="flex flex-col " onSubmit={handleRegister}>
      <label className="text-white font-bold text-xl mb-[10px] mt-[20px]">
        Nome
      </label>
      <input
        type="text"
        placeholder="digite seu nome completo"
        className="w-[450px] outline-none p-2 rounded-sm text-xl text-gray-700"
        name="fullName"
        onChange={handleChange}
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
        onChange={handleChange}
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
        onChange={handleChange}
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
        onChange={handleChange}
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
        onChange={handleChange}
        value={password}
      />
      <label className="text-white font-bold text-xl mb-[10px] mt-[20px]">
        Foto de perfil
      </label>
      <input
        type="file"
        className="text-white mb-[20px]"
        name="pic"
        onChange={handleChange}
        value={pic}
      />
        <button
          type="submit"
          className="bg-primary-700 hover:bg-primary-800 p-2 text-white font-bold"
        >
          CRIAR CONTA
        </button>
        <ToastContainer/>
    </form>
  );
}
