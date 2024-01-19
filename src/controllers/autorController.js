import NaoEncontrado from "../Erros/NaoEncontrado.js";
import {autor} from "../models/Autor.js";

class autorController {
  static async listarAutores(req, res, next) {
    try{
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    }
    catch(error){
      next(error);
    }

  }

  static async cadastrarAutor(req, res, next) {
    try{
      const novoAutor = await autor.create(req.body);
      res.status(201).json({message: "Autor cadastrado com sucesso!", autor: novoAutor});
    }
    catch(error){
      next(error);
    }
  }

  static async listarAutorPorID(req, res, next) {
    try{
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      if(autorEncontrado != null) {
        res.status(200).json(autorEncontrado);
      }
      else{
        next(new NaoEncontrado("Autor não encontrado"));
      }
    }
    catch(error){
      next(error);
    }

  }

  static async atualizarAutorPorID(req, res, next) {
    try{
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Autor Atualizado!"});
    }
    catch(error){
      next(error);
    }
  }

  static async deletarAutorPorID(req, res, next) {
    try{
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor Deletado!"});
    }
    catch(error){
      next(error);
    }
  }



}

export default autorController;