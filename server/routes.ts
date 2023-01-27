import {Router} from 'express'
import { createPost } from './controllers/PostsController'
import {createUser,Login} from './controllers/UsersController'
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

router.post('/createUser', createUser)
router.post('/login', Login)
router.post('/createPost',upload.single('picture') ,createPost)


export default router