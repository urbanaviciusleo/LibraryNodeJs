import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";
import ErroRequisicaoIncorreta from "../Erros/ErroRequisicaoIncorreta.js";
import ErroValidacao from "../Erros/ErroValidacao.js";
import NaoEncontrado from "../Erros/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function ErrorHandler (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new ErroRequisicaoIncorreta().enviarResposta(res);
  }
  else if(erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarResposta(res);
  } 
  else if(erro instanceof NaoEncontrado){
    erro.enviarResposta(res);
  }
  else { 
    new ErroBase().enviarResposta(res);
  }
}

export default ErrorHandler;