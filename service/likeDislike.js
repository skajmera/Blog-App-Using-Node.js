
const LikeDislike = require('../model/likeDislike');

module.exports = class likeDislikeService {
    async createLike(like) {
        const user = await LikeDislike.query().where('user_id', like.user_id)
        console.log(user)
        if (!user[0]) {
            return await LikeDislike.query().insert(like);
        }
        return await LikeDislike.query()
            .update(like)
            .where('user_id', like.user_id);
    }



    async totalLike(total) {
        const summ = await LikeDislike.query().sum('like', true)
        console.log(summ);
        return summ
    }



    async totalDislike(total) {
        const summ = await LikeDislike.query().sum('dislike', false)
        console.log(summ);
        return summ
    }


    async totalLikeDislike(txn) {
        return await LikeDislike.query();

    }

}
