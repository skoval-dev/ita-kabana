"use strict";
const {User} = require("./../../models");
class UserController {

    // GET /users
    getUserList(ctx, next) {
        console.log("getUserList");
        ctx.status = 200;
        return next();
    }

    // GET /user/:id
    getUser(ctx, next) {
        console.log("getUser");
        ctx.status = 200;
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
    updateUser(ctx, next) {
        console.log("updateUser");
        ctx.status = 200;
        return next();
    }

    // DELETE /user/:id
    deleteUser(ctx, next) {
        console.log("deleteUser");
        ctx.status = 200;
        return next();
    }
}


module.exports = UserController;