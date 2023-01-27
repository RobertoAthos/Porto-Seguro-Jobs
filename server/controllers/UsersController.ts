import user from '../models/UsersModel'
import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/default'

export async function createUser(req:Request,res:Response){
      try {
        const {fullName,email,tel,location,password} = req.body

        const newUser = new user({
            fullName,
            email,
            tel,
            location,
            password: bcrypt.hashSync(password, 10)
        })

        if(fullName === '' && email === '' && password ===''){
          res.status(400).json({message: 'Você provavelmente não preencheu alguns campos'})
        }

        const saveUser = await newUser.save()
        res.status(200).send(saveUser)

      } catch (error) {
        res.status(400).send(error)
      }
}

export async function Login(req:Request,res:Response){
    try {
      const userLogin = await user.findOne({email:req.body.email})
      if(!userLogin) return res.status(404).send('User not found')

      const MatchCredentials = bcrypt.compareSync(req.body.password, userLogin.password!)
      if(!MatchCredentials) return res.status(400).send('Invalid Credentials')

      const token = jwt.sign({_id: userLogin._id}, SECRET_KEY!)

      res.header('authorization', token)
      res.status(200).json({userLogin,token})
    } catch (error:any) {
      res.status(400).send(error.message)
    }
}

