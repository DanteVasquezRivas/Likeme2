const router = require('express').Router()

const {getPostController, addPostController, modPostController, delPostController} = require ('../../controllers/posts/postsController')

router.post('/add', addPostController)
router.get('/getPosts', getPostController)
router.put('/put/:id', modPostController )
router.delete('/delete/:id', delPostController)           
module.exports = router 


