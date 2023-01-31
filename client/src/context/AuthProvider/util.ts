import { API } from "@/services/api";
import { IUser } from "@/types/types";

export const setUserLocalStorage = (user: IUser | null)=>{
    localStorage.setItem('authorization', JSON.stringify(user))
}

export const getUserLocalStorage = ()=>{
    const json = localStorage.getItem('authorization')
    if(!json){
        return null
    }

    const user = JSON.parse(json)

    return user ?? null
}

export const Login = async (email:string, password:string)=>{
    try {
        const res = await API.post('login', {email,password})
        return res.data
    } catch (error) {
        return error        
    }
}

export const Register = async(fullName:string, email:string, password:string, tel:string, location:string, pic:string)=>{
    try {
        const res = await API.post('createUser', {fullName,email,password,tel,pic,location})
        return res.data
    } catch (error) {
        return error        
    }
}