// import http from "http";
// import EventEmitter from "events";
// import Router from "./framework/Router.js";
import Application from "./framework/Application.js";
import router from "./src/user-router.js";
import jsonParser from "./framework/parseJson.js";
import parseUrl from "./framework/parseUrl.js";
// const userRouter = import("./src/user-router.js");
// const router = require("./src/user-router.js");

const PORT = process.env.PORT || 5000;

const app = new Application();

// const router = new Router();

// router.get("/users", (req, res) => {
//   res.end("YOU SEND REQUEST TO /users");
// });

// router.get("/posts", (req, res) => {
//   res.end("YOU SEND REQUEST TO /posts");
// });

app.use(jsonParser);
app.use(parseUrl("http://localhost:5000"));

app.addRouter(router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const server = http.createServer((req, res) => {
//   //   res.writeHead(200, {
//   //     "Content-type": "text/html",
//   //   });
//   //   res.end("<h1>Server is working!</h1>");
//   res.writeHead(200, {
//     "Content-type": "application/json",
//   });
//   if (req.url === "/users") {
//     return res.end(JSON.stringify([{ id: 1, name: "Vasyl" }]));
//   }
//   if (req.url === "/posts") {
//     return res.end("POSTS");
//   }
//   res.end("Server is working!");
// });

// const server = http.createServer(();
