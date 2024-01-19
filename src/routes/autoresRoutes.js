import express from "express";
import autorController from "../controllers/autorController.js";

const autoresRoutes = express.Router();

autoresRoutes.get("/autores", autorController.listarAutores);
autoresRoutes.get("/autores/:id", autorController.listarAutorPorID);
autoresRoutes.post("/autores", autorController.cadastrarAutor);
autoresRoutes.put("/autores/:id", autorController.atualizarAutorPorID);
autoresRoutes.delete("/autores/:id", autorController.deletarAutorPorID);

export default autoresRoutes;
