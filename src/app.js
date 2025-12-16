import express from 'express';
import conectNaDatabase from './config/dbConfig.js';
import routes from './routes/index.js';
import trataErros from '../midlleware/trataErros.js';
import manipula404 from './midlleware/manipula404.js';


const conection = await conectNaDatabase();

conection.on("error", (err) => {
    console.error("Erro de conexão", err);
});

conection.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso");
});


const app = express();
//midlleware para tratar erros


// app.use((req,res)=>{
    //     res.status(200).send({message: "API rodando!"});
    // });
routes(app);

app.use(manipula404);
app.use(trataErros);

export default app;