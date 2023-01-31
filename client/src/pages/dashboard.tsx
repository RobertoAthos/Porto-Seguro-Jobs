import SideBar from "@/components/SideBar";
import { useAuth } from "@/context/AuthProvider/useAuth";
import React from "react";
import Router from 'next/router'

export default function dashboard() {
  const auth = useAuth()
  return (

  <>
    {!auth.email ? 'negado' : (
      <>
      <SideBar />
      <h2>Olá,{auth.email}</h2>
      </>
    )}
  </>
  );
}
