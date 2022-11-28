const { Router } = require('express');

const useAuth = require('../middleware/auth');
const {
    login,
    getPostById,
    createPost,
    updatePostById,
    deletePostById
} = require('../controllers/admin-controllers');

const router = Router();

router.post('/login', login);

// router.use(useAuth);

router.get('/posts/:pid', getPostById);
router.post('/post', createPost);
router.patch('/posts/:pid', updatePostById);
router.delete('/posts/:pid', deletePostById);

module.exports = router;