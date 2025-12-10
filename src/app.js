import express from 'express';
import conectNaDatabase from './config/dbConfig.js';
import routes from './routes/index.js';
import trataErros from '../midlleware/trataErros.js';


const conection = await conectNaDatabase();

conection.on("error", (err) => {
    console.error("Erro de conexão", err);
});

conection.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso");
});


const app = express();
//midlleware para tratar erros

app.use(trataErros)
// app.use((req,res)=>{
//     res.status(200).send({message: "API rodando!"});
// });
routes(app);

export default app;