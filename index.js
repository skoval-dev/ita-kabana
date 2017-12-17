"use strict";

const port = process.env.PORT || 3000;
const Koa = require("koa");
const router = require("./http/router");

const app = new Koa();

app.use(router.middleware());
app.use(router.allowedMethods())


app.listen(port, (err) => {
    console.log(`Server is up on port ${port}`)
});