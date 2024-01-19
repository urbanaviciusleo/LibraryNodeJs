import ErroBase from "./ErroBase.js";

class ErroRequisicaoIncorreta extends ErroBase {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
    super(mensagem,400);
  }
  //testar sem passar nada pro super 

}
    
export default ErroRequisicaoIncorreta;