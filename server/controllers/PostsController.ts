import {Request, Response} from 'express'
import post from '../models/PostModel'


export async function createPost(req:Request, res:Response){

  try {
    const {title,desc,location, img} = req.body

    const postModel = new post({
        title,
        desc,
        location,
        img
    })

    const savePost = await postModel.save()
    res.status(200).send(savePost)
  } catch (error:any) {
    res.status(400).send(error.message)
  }


}
export async function getPots(req:Request, res:Response){

}
export async function getPost(req:Request, res:Response){

}
export async function deletePost(req:Request, res:Response){

}

export async function updatePost(req:Request, res:Response){

}