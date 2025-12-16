/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import ErroBase from "../erros/erroBase";
import RequisicaoIncorreta from "../erros/requisicaoIncorreta";
import ErroValidacao from "../erros/erroValidacao";
import NaoEncontrado from "../erros/naoEncontrado";

function trataErros (err, req, res, next) {
  console.log(err);
    if(err instanceof mongoose.Error.CastError){
      new RequisicaoIncorreta().enviarResposta(res);
    } 
    else if(err instanceof mongoose.Error.ValidationError){
      new ErroValidacao(err).enviarResposta(res);
    }
    else if(err instanceof NaoEncontrado){
      err.enviarResposta(res);
    }
    else {
      new ErroBase().enviarResposta(res);
    }
    
};

export default trataErros;