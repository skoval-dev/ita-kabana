"use strict";
const {User} = require("./../../models");
const ObjectId = require("mongoose").Types.ObjectId;
class UserController {

    // GET /users
    async getUserList(ctx, next) {
        const docs = await User.find();
        console.log("getUserList");
        ctx.status = 200;
        ctx.body = docs;
        return next();
    }

    // GET /user/:id
    async getUser(ctx, next) {
        const {id} = ctx.params;
        const doc = await User.findById(id);

        console.log("getUser");
        ctx.status = 200;
        ctx.body = doc;
        return next();
    }

    // POST /user
    async createUser(ctx, next) {
        const userData = ctx.request.body;
        const user = new User(userData);
        const doc = await user.save();

        console.log("createUser");
        ctx.status = 200;
        ctx.body = doc;

        return next();
    }

    // PUT /user/:id
    async updateUser(ctx, next) {
        const {id} = ctx.params;
        const userData = ctx.request.body;
        ctx.body = await User.findByIdAndUpdate(id, userData, {new: true});
        console.log("updateUser");
        ctx.status = 200;
        return next();
    }

    // DELETE /user/:id
    async deleteUser(ctx, next) {
        const {id} = ctx.params;
        const {deletedCount} = await User.deleteOne({_id: ObjectId(id)});

        if(deletedCount === 1){
            ctx.status = 200;
        } else {
            ctx.status = 204;
        }

        console.log("deleteUser");
        return next();
    }
}


module.exports = UserController;