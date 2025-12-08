import livro from '../models/livro.js';

class LivroController {
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).send({message: `${error.message} - Erro ao listar os livros.`});
        }
    };

    static async cadastrarLivro (req, res) {
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message :"Livro cadastrado com sucesso\n", livro: novoLivro});
        }catch (error) {
            res.status(500).send({message: `${error.message} - Erro ao cadastrar o livro.`});
        }
    };
};

export default LivroController;