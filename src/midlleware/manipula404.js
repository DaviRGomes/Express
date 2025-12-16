import NaoEncontrado from "../erros/naoEncontrado";

 
function manipula404(req, res, next) {
    const erro404 = new NaoEncontrado();
    next(erro404);
}

export default manipula404;