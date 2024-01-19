import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res, next) {
    try{
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    }
    catch(error){
      next(error);
    }

  }

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try{
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc}};
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({message: "Livro cadastrado com sucesso!", livro: livroCriado});
    }
    catch(error){
      next(error);
    }
  }

  static async listarLivroPorID(req, res, next) {
    try{
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    }
    catch(error){
      next(error);
    }

  }

  static async atualizarLivroPorID(req, res, next) {
    try{
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Livro Atualizado!"});
    }
    catch(error){
      next(error);
    }
  }

  static async deletarLivroPorID(req, res, next) {
    try{
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({message: "Livro Deletado!"});
    }
    catch(error){
      next(error);
    }
  }



}

export default LivroController;