import React,{createContext, useEffect,useState} from 'react'
import { IContext, IUsers, IAuthProvider,IUser } from '@/types/types'
import {Login,Register,getUserLocalStorage,setUserLocalStorage} from './util'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider)=>{
    const[login,setLogin] = useState<IUser | null>()
    const[registerUser,setRegisterUser] = useState<IUsers | null>()

    useEffect(()=>{
        const user = getUserLocalStorage()

        if(user) setLogin(user)
    },[])

    const authenticate = async(email:string,password:string)=>{
        const res = await Login(email,password)
        const payload = {token:res.token, email}
        setLogin(payload)
        setUserLocalStorage(payload)
    }

    const register = async(fullName:string, email:string, password:string, tel:string, location:string, pic:string)=>{
        const res = await Register(fullName,password,email,tel,location,pic)
        setRegisterUser({
            fullName,
            email,
            password,
            tel,
            location,
            pic,
            ...res
        })
    }

    const logout = ()=>{
        setLogin(null)
        setUserLocalStorage(null)
    }

    return(
        <AuthContext.Provider value={{...login,...registerUser, authenticate, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
