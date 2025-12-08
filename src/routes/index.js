import express from 'express';
import livros from './livrosRoutes.js';
import e from 'express';

const routes = (app) => {

    app.route("/").get((req, res) => {
        res.status(200).send("Quem nasce da carne eh carne, e o que eh nascido do Espirito eh espirito"
        )});
    
    app.use(express.json(), livros);
};

export default routes;