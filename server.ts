import Koa from "koa";
import BodyParser from "koa-bodyparser";
import Router from "koa-router";
import Logger from "koa-logger";
import cors from 'koa-cors';
import serve from "koa-static";
import mount from "koa-mount";
import HttpStatus from "http-status";
import dotenv from 'dotenv';

import initDB from './database';

dotenv.config();


initDB();

const app = new Koa();

const {PORT} = process.env;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();

//we can test this api works by going to postman and using the GET request on localhost:3000/food-menu
router.get('/',async (ctx,next)=>{
    const foods = ["miki","silogs","turon","shanghai"];
    ctx.status = HttpStatus.OK;
    ctx.body = foods;
    await next();
});

router.post('/',async (ctx,next)=>{
    ctx.body = "Post method was called";
});

router.put('/',async (ctx,next)=>{
    ctx.body = "Put method was called";
});

router.delete('/',async (ctx,next)=>{
    ctx.body = "Delete method was called";
});

//Use the routes defined using the const router in line 18
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});