"use strict";
const {Board} = require("./../../models");
const ObjectId = require("mongoose").Types.ObjectId;
class BoardController {

    // GET /boards
    async getBoardList(ctx, next) {
        const docs = await Board.find();
        console.log("getBoardrList");
        ctx.status = 200;
        ctx.body = docs;
        return next();
    }

    // GET /board/:id
    async getBoard(ctx, next) {
        const {id} = ctx.params;
        const doc = await Board.findById(id);

        console.log("getBoard");
        ctx.status = 200;
        ctx.body = doc;
        return next();
    }

    // POST /board
    async createBoard(ctx, next) {
        const boardData = ctx.request.body;
        const board = new Board(boardData);
        const doc = await board.save();

        console.log("createBoard");
        ctx.status = 200;
        ctx.body = doc;

        return next();
    }

    // PUT /board/:id
    async updateBoard(ctx, next) {
        const {id} = ctx.params;
        const boardData = ctx.request.body;
        ctx.body = await Board.findByIdAndUpdate(id, boardData, {new: true});
        console.log("updateBoard");
        ctx.status = 200;
        return next();
    }

    // DELETE /board/:id
    async deleteBoard(ctx, next) {
        const {id} = ctx.params;
        const {deletedCount} = await Board.deleteOne({_id: ObjectId(id)});

        if(deletedCount === 1){
            ctx.status = 200;
        } else {
            ctx.status = 204;
        }

        console.log("deleteBoard");
        return next();
    }
}


module.exports = BoardController;