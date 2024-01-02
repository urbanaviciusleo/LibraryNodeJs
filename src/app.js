import express from "express";
import connect from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conection = await connect();
conection.on("error", err => console.error(err));

conection.once("open", () => console.log("Connection done!"));

const app = express();
routes(app);

export default app;