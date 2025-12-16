import express from 'express';
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/", LivroController.listar);
routes.get("/busca", LivroController.listaLivrosPorFiltro);
routes.post("/", LivroController.cadastrar);
routes.get("/:id", LivroController.findById);
routes.put("/:id", LivroController.atualizar);
routes.delete("/:id", LivroController.deletar);

export default routes;
