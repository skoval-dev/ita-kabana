"use strict";
const Router = require("koa-router");
const router = new Router();
const {UserController} = require("./controllers");

const notImplemented = (ctx, next) => {
    ctx.status = 501;
    ctx.body = {
      method: ctx.method,
      path: ctx.path,
      params: ctx.params
    };
    return next();
};

const userController = new UserController();

router.get("/users", userController.getUserList);
router.get("/user/:id", userController.getUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);


router.get("/boards", notImplemented);
router.get("/board/:id", notImplemented);
router.post("/board", notImplemented);
router.put("/board/:id", notImplemented);
router.delete("/board/:id", notImplemented);

router.get("/lists", notImplemented);
router.get("/list/:id", notImplemented);
router.post("/list", notImplemented);
router.put("/list/:id", notImplemented);
router.delete("/list/:id", notImplemented);

router.get("/tasks", notImplemented);
router.get("/task/:id", notImplemented);
router.post("/task", notImplemented);
router.put("/task/:id", notImplemented);
router.delete("/task/:id", notImplemented);

router.get("/attachment/:id", notImplemented);
router.post("/attachment", notImplemented);
router.delete("/attachment/:id", notImplemented);

module.exports = router;
