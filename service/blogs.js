
const Blogs = require('../model/blogs');

module.exports = class BlogService {
    async createBlog(details) {
        return await Blogs.query().insert(details);
    }
    async findAll(txn) {
        return await Blogs.query();
    }
    async findById(userid) {
        const userId = await Blogs.query().findById(userid);
        if (userId == undefined) {
            return ({ "Sorry": "user not found" })
        }
        return userId;
    }
    async deleteById(wedelete) {
        const ip = await Blogs.query().deleteById(wedelete);
        if (ip == 0) {
            return ({ "Sorry": "user id not found" })
        }
        return ({"id":"successfull deleted"})
    }
    async updateById(id, updated) {
        const upp = await Blogs.query()
            .update(updated)
            .where('id', id);
        if (upp==0) {
            return ({ "sorry": "id not found" });
        }
        return ({"data":"successful added"})
    }
}