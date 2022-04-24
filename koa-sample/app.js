import Koa from "koa";
// const bodyParser = require("koa-bodyparser");
import bodyParser from "koa-bodyparser";
import postsRouter from "./router/posts.router.js";

const app = new Koa();

app.use(bodyParser());

app.use(postsRouter.routes()).use(postsRouter.allowedMethods());

app.use((ctx) => {
  ctx.set("Content-Type", "text/html");
  ctx.body = "<h3>Not Found</h3>";
  ctx.status = 404;
});

app.listen(3000, (data) => {
  console.log("App running on PORT 3000");
});
