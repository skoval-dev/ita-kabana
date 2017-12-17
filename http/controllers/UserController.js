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
    createUser(ctx, next) {
        console.log("createUser");
        ctx.status = 200;
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