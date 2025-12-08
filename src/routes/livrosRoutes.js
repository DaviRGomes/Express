import express from 'express';
import livroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);
routes.post("/livros", livroController.cadastrarLivro);

export default routes;
