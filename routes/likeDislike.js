var express = require('express');
const { authenticateToken } = require('../auth/jwt');
const router = express.Router();
const likeDislikeService = require('../service/likeDislike');
const Service = new likeDislikeService();

router.get('/homepage', (req, res) => {
    console.log({ "success": "Welcome on the home page!" });
    res.send({ "success": "Welcome on the likeDislikeapp page!" })
})


router.put('/like', authenticateToken, async (req, res) => {
    await Service.createLike(req.body).then((data) => {
        res.send({ "like": "thanks for like" });
    }).catch((err) => {
        res.send(err);
    })
})

router.get('/allLikes', authenticateToken, async (req, res) => {
    await Service.totalLike().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

router.get('/allDislike', authenticateToken, async (req, res) => {
    await Service.totalDislike().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

router.get('/AllData', authenticateToken, async (req, res) => {
    await Service.totalLikeDislike().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })


})

module.exports = router
