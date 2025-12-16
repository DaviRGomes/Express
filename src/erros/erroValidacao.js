import RequisicaoIncorreta  from "./requisicaoIncorreta";

class ErroValidacao extends RequisicaoIncorreta {
    constructor(err){
        const mensagensErro = Object.values(err.errors)
          .map(erro => erro.message)
          .join("; ");
        super(`Os seguintes erros foram encontrados:  
          ${mensagensErro} `);
    }
}
export default ErroValidacao;   