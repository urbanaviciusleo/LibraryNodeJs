import {autor} from '../models/Autor.js';

class autorController {
    static async listarAutores(req, res) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }
        catch(error){
            res.status(500).json({message: `${erro.message} - falha na requisição!`});
        }

    }

    static async cadastrarAutor(req, res) {
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: 'Autor cadastrado com sucesso!', autor: novoAutor});
        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor!`});
        }
    }

    static async listarAutorPorID(req, res) {
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        }
        catch(error){
            res.status(500).json({message: `${erro.message} - falha na requisição!`});
        }

    }

    static async atualizarAutorPorID(req, res) {
        try{
            const id = req.params.id;
            const autorAtualizado = await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor Atualizado!"});
        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao atualizar autor!`});
        }
    }

    static async deletarAutorPorID(req, res) {
        try{
            const id = req.params.id;
            const novoAutor = await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor Deletado!"});
        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao deletar autor!`});
        }
    }



}

export default autorController;