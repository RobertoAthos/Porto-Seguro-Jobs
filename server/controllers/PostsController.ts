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
    res.status(200).json(savePost)
  } catch (error:any) {
    res.status(400).json({message: error.message})
  }


}
export function getPots(req:Request, res:Response){
    try {
        const posts = post.find()
        res.status(200).json(posts)
    } catch (error:any) {
      res.status(400).json({message: error.message})
    }
}
export async function getPost(req:Request, res:Response){
    try {
      const {id} = req.params
      const getPost = await post.findById(id)
      res.status(200).json(getPost)
    } catch (error:any) {
      res.status(400).json({message: error.message})
    }

}
export async function deletePost(req:Request, res:Response){
    try {
      const {id} = req.params
      const posts = await post.findById(id)
      if(!posts) res.send('post not found')
      const deletePost = await post.findByIdAndDelete(id)
      res.status(200).json(deletePost)
    } catch (error:any) {
      res.status(400).json({message: error.message})
    }
}

export async function updatePost(req:Request, res:Response){
  try {
      const {id} = req.params
      const {title,desc,location, img} = req.body
      const Post = await post.findById(id)
      if(!Post) res.status(404).send('Post do not exist')
      const updatePost = await post.findByIdAndUpdate({_id:id}, {
        title,
        desc,
        location,
        img
      })
      res.status(200).json(updatePost)
  } catch (error:any) {
    res.status(400).json({message: error.message})
  }
}