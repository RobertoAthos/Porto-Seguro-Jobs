import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import SignUpForm from "@/components/SignUpForm";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function SignUp() {
  return (
    <>
      <SEO name="porto seguro jobs cadastro" title="Cadastro" desc="cadastro" />
      <Header />
      <main>
        <section className="w-full bg-primary-200 p-4">
          <div className="w-full h-screen max-w-[1500px] m-auto flex justify-around">
            <div className="text-white mt-24">
              <h3 className="font-bold text-3xl">
                Pare de sair na rua para entregar currículo <br /> e receba
                propostas de emprego na sua casa !
              </h3>
              <ul className="mt-12">
                <li className="flex text-[#918B7B] font-bold  items-center gap-6">
                  <AiOutlineCheck className="text-primary-700" /> Saiba antes
                  todos os benefícios da vaga
                </li>
                <li className="flex text-[#918B7B] font-bold  items-center gap-6">
                  <AiOutlineCheck className="text-primary-700" /> Com um único
                  cadastro você participa de todos os processos!
                </li>
                <li className="flex text-[#918B7B] font-bold  items-center gap-6">
                  <AiOutlineCheck className="text-primary-700" /> Plataforma
                  100% gratuita
                </li>
              </ul>
              <p className="mt-8">Quer criar uma conta para sua empresa e ver milhares de possíveis contratados ?</p>
              <Button name="CADASTRE SUA EMPRESA"/>
            </div>
            <div>
              <SignUpForm />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
