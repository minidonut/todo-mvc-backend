import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set("port", process.env.PORT || 3101);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(app.get("port"), () => {
  console.log(`
  App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode
  Press CTRL-C to stop
`);
});
