"use strict";
const {List} = require("./../../models");
const ObjectId = require("mongoose").Types.ObjectId;
class ListController {

    // GET /lists
    async getListList(ctx, next) {
        const docs = await List.find();
        console.log("getListList");
        ctx.status = 200;
        ctx.body = docs;
        return next();
    }

    // GET /lists/:id
    async getList(ctx, next) {
        const {id} = ctx.params;
        const doc = await List.findById(id);

        console.log("getList");
        ctx.status = 200;
        ctx.body = doc;
        return next();
    }

    // POST /list
    async createList(ctx, next) {
        const listData = ctx.request.body;
        const list = new List(listData);
        const doc = await list.save();

        console.log("createList");
        ctx.status = 200;
        ctx.body = doc;

        return next();
    }

    // PUT /list/:id
    async updateList(ctx, next) {
        const {id} = ctx.params;
        const listData = ctx.request.body;
        ctx.body = await List.findByIdAndUpdate(id, listData, {new: true});
        console.log("updateList");
        ctx.status = 200;
        return next();
    }

    // DELETE /list/:id
    async deleteList(ctx, next) {
        const {id} = ctx.params;
        const {deletedCount} = await List.deleteOne({_id: ObjectId(id)});

        if(deletedCount === 1){
            ctx.status = 200;
        } else {
            ctx.status = 204;
        }

        console.log("deleteList");
        return next();
    }
}


module.exports = ListController;