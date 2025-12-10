/* eslint-disable no-unused-vars */
import mongoose from "mongoose";

function trataErros (err, req, res, next) {
  console.log(err);
    if(err instanceof mongoose.Error.CastError){
        return res.status(400).json({ message: "Dados inválidos para criação do autor" });
      } 
    res.status(500).json({ message: `${err.message} - Erro interno do servidorr` });
};

export default trataErros;