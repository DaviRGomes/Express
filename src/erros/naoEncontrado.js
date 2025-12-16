import ErroBase from "./erroBase.js";

class NaoEncontrado extends ErroBase {
    constructor(){
        super("Pagina não encontrada", 404);
    }
}
export default NaoEncontrado;