import express from 'express';
import livros from './livrosRoutes.js';
import autores from "./autorRoutes.js";



const routes = (app) => {

    app.route("/").get((req, res) => {
        res.status(200).send("Quem nasce da carne eh carne, e o que eh nascido do Espirito eh espirito"
        )});
    
    app.use(express.json(), livros, autores);
};

export default routes;