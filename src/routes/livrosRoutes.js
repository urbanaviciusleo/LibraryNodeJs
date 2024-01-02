import express from 'express';
import livroController from '../controllers/livroController.js';

const livrosRoutes = express.Router();

livrosRoutes.get('/livros', livroController.listarLivros);
livrosRoutes.get('/livros/:id', livroController.listarLivroPorID);
livrosRoutes.post('/livros', livroController.cadastrarLivro);
livrosRoutes.put('/livros/:id', livroController.atualizarLivroPorID);
livrosRoutes.delete('/livros/:id', livroController.deletarLivroPorID)

export default livrosRoutes;
