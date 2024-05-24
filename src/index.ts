import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("Hello Bun!"));
// app.get("/test/", (c) => c.json({ data: null, message: "success" }));
//c.req untuk mengambil request c.body mengambil data body jadi c ini digunakan untuk content req dan response
app.get("/code/:id", (c) => c.json({ id: c.req.param("id") }));

export default {
  port: 3000,
  fetch: app.fetch,
};
