import livro from '../models/Livro.js';

class LivroController {
    static async listarLivros(req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }
        catch(error){
            res.status(500).json({message: `${erro.message} - falha na requisição!`});
        }

    }

    static async cadastrarLivro(req, res) {
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: 'Livro cadastrado com sucesso!', livro: novoLivro});
        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro!`});
        }
    }

    static async listarLivroPorID(req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }
        catch(error){
            res.status(500).json({message: `${erro.message} - falha na requisição!`});
        }

    }

    static async atualizarLivroPorID(req, res) {
        try{
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro Atualizado!"});
        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao atualizar livro!`});
        }
    }

    static async deletarLivroPorID(req, res) {
        try{
            const id = req.params.id;
            const novoLivro = await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro Deletado!"});
        }
        catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao deletar livro!`});
        }
    }



}

export default LivroController;