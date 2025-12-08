import express from 'express';
import conectNaDatabase from './config/dbConfig.js';
import routes from './routes/index.js';


const conection = await conectNaDatabase();

conection.on("error", (err) => {
    console.error("Erro de conexão", err);
});

conection.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso");
});


const app = express();
routes(app);


export default app;