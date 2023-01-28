import {Router} from 'express'
import { createPost,deletePost,getPost,getPots,updatePost } from './controllers/PostsController'
import {createUser,UpdateUser,Login} from './controllers/UsersController'
import multer from 'multer'

const router = Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

router.post('/createUser',upload.single('picture') ,createUser)
router.post('/login', Login)
router.post('/createPost',upload.single('picture') ,createPost)
router.get('/posts', getPots)
router.get('/post/:id', getPost)
router.patch('/updatePost/:id',upload.single('picture') ,updatePost)
router.patch('/updateUser/:id',upload.single('picture'), UpdateUser)
router.delete('/delete/:id', deletePost)


export default router