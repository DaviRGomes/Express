import ErroBase from "./erroBase";

class RequisicaoIncorreta extends ErroBase {
    constructor(mensagem = "Uma ou mais informações fornecidas na requisição são inválidas.") {
        super(mensagem, 400);
    }
}

export default RequisicaoIncorreta;