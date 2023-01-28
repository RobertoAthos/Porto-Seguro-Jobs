import user from '../models/UsersModel'
import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/default'

export async function createUser(req:Request,res:Response){
      try {
        const {fullName,email,tel,location,password, pic} = req.body

        const newUser = new user({
            fullName,
            email,
            tel,
            location,
            password: bcrypt.hashSync(password, 10),
            pic
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

export async function UpdateUser(req:Request,res:Response){
    try {
      const {id} = req.params
      const {fullName,email,tel,location,password, pic} = req.body
      const User = await  user.findById(id)
      if(!User) res.status(404).send('User do not exist')
      const updateUser = await user.findByIdAndUpdate({_id:id},{
        fullName,
        email,
        tel,
        location,
        password,
        pic,
      })
      res.status(200).json(updateUser)
    } catch (error:any) {
      res.status(400).json({message: error.message})
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

