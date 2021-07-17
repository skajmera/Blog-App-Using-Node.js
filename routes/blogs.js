var express = require('express');
const router = express.Router();
const BlogService = require('../service/blogs');
const service = new BlogService();
const { authenticateToken } = require('../auth/jwt');


router.get('/homepageblog', (req, res) => {
    console.log({ "success": "Welcome on the home page!" });
    res.send({ "success": "Welcome on the blogapp page!" })
})

router.post('/blogsignup', authenticateToken, async (req, res) => {
    await service.createBlog(req.body).then((data) => {
        console.log({ "success": "Successfully signed up" });
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/getAllblog', authenticateToken, (req, res) => {
    try {
        service.findAll().then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        })
    } catch (err) {
        console.log(err);
    }
})


router.get('/:id', authenticateToken, (req, res) => {

    service.findById(req.params.id).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})
router.delete('/deleteblog/:id', authenticateToken, (req, res) => {
    service.deleteById(req.params.id).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})
router.put('/updateblog/:id', authenticateToken, (req, res) => {
    service.updateById(req.params.id, req.body).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})

module.exports = router




