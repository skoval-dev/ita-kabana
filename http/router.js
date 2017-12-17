"use strict";
const Router = require("koa-router");
const router = new Router();
const {UserController, BoardController, ListController, TaskController} = require("./controllers");

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
const boardController = new BoardController();
const listController = new ListController();
const taskController = new TaskController();

router.get("/users", userController.getUserList);
router.get("/user/:id", userController.getUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);


router.get("/boards", boardController.getBoardList);
router.get("/board/:id", boardController.getBoard);
router.post("/board", boardController.createBoard);
router.put("/board/:id", boardController.updateBoard);
router.delete("/board/:id", boardController.deleteBoard);

router.get("/lists", listController.getListList);
router.get("/list/:id", listController.getList);
router.post("/list", listController.createList);
router.put("/list/:id", listController.updateList);
router.delete("/list/:id", listController.deleteList);

router.get("/tasks", taskController.getTask);
router.get("/task/:id", taskController.getTaskList);
router.post("/task", taskController.createTask);
router.put("/task/:id", taskController.updateTask);
router.delete("/task/:id", taskController.deleteTask);

router.get("/attachment/:id", notImplemented);
router.post("/attachment", notImplemented);
router.delete("/attachment/:id", notImplemented);

module.exports = router;
