import ErroRequisicaoIncorreta from "./ErroRequisicaoIncorreta.js";

class ErroValidacao extends ErroRequisicaoIncorreta {
  constructor(erro) {
    const erros = Object.values(erro.errors)
      .map(erro => erro.message)
      .join(",");

    super({message:`Erros de validação encontrados: ${erros}`},400);

  }
}
    
export default ErroValidacao;

