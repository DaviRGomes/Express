import express from 'express';
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listar);
routes.get("/livros/busca", LivroController.listaLivrosPorEditora);
routes.post("/livros", LivroController.cadastrar);
routes.get("/livros/:id", LivroController.findById);
routes.put("/livros/:id", LivroController.atualizar);
routes.delete("/livros/:id", LivroController.deletar);

export default routes;
