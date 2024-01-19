import express from "express";
import connect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import ErrorHandler from "./Middlewares/ErrorHandler.js";
import Manipulador404 from "./Middlewares/Manipulador404.js";

const conection = await connect();
conection.on("error", err => console.error(err));

conection.once("open", () => console.log("Connection done!"));

const app = express();
routes(app);
app.use(Manipulador404);

// eslint-disable-next-line no-unused-vars
app.use(ErrorHandler);
export default app;