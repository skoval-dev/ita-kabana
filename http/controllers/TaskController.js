"use strict";
const {Task} = require("./../../models");
const ObjectId = require("mongoose").Types.ObjectId;
class TaskController {

    // GET /tasks
    async getTaskList(ctx, next) {
        const docs = await Task.find();
        console.log("getTaskList");
        ctx.status = 200;
        ctx.body = docs;
        return next();
    }

    // GET /task/:id
    async getTask(ctx, next) {
        const {id} = ctx.params;
        const doc = await Task.findById(id);

        console.log("getTask");
        ctx.status = 200;
        ctx.body = doc;
        return next();
    }

    // POST /task
    async createTask(ctx, next) {
        const taskData = ctx.request.body;
        const task = new Task(taskData);
        const doc = await task.save();

        console.log("createTask");
        ctx.status = 200;
        ctx.body = doc;

        return next();
    }

    // PUT /task/:id
    async updateTask(ctx, next) {
        const {id} = ctx.params;
        const taskData = ctx.request.body;
        ctx.body = await Task.findByIdAndUpdate(id, taskData, {new: true});
        console.log("updateTask");
        ctx.status = 200;
        return next();
    }

    // DELETE /task/:id
    async deleteTask(ctx, next) {
        const {id} = ctx.params;
        const {deletedCount} = await Task.deleteOne({_id: ObjectId(id)});

        if(deletedCount === 1){
            ctx.status = 200;
        } else {
            ctx.status = 204;
        }

        console.log("deleteTask");
        return next();
    }
}


module.exports = TaskController;