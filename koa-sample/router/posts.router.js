// const Router = require("@koa/router");
// const save = require("../api/posts.api");
// const get = require("../api/posts.api");
import Router from "@koa/router";
import { save, get, deletePost, update, getAll } from "../api/posts.api.js";

const postsRouter = new Router({
  prefix: "/posts",
});

postsRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

postsRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  const post = save(data);
  ctx.body = post;
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

postsRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

postsRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

postsRouter.delete("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 200;
});

export default postsRouter;
