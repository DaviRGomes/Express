import { autor } from '../models0/index.js';
import {Livro} from '../models/index.js';

class LivroController {
    static async listar (req, res) {
        try {
            const listaLivros = await Livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).send({message: `${error.message} - Erro ao listar os livros.`});
        }
    };

    static async findById (req, res){
        const id = req.params.id;
        try{
            const livro = await Livro.findById(id);
            res.status(200).json({message :`Livro do id => ${id} encontrado` , Livro: livro})
        }catch(error){
            res.status(500).send({message :`Livro do id => ${id} não foi encontrado`, error: error.message})
        }
    }

    static async cadastrar (req, res) {
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado
                ._doc } };
            const livroCriado = await Livro.create(livroCompleto);
            res.status(201).json({message :"Livro cadastrado com sucesso\n", Livro: livroCriado});
        }catch (error) {
            res.status(500).send({message: `${error.message} - Erro ao cadastrar o livro.`});
        }
    };

    static async atualizar (req, res){
        const id = req.params.id;
        const livroUpdate = req.body;
        try{
            // sem o true não mostra alteração na quando retorna, por padrão de segurança o mongoose retorna o valor original : { new: true }
            const autorEncontrado = await autor.findById(livroUpdate.autor);
            const livro = {...livroUpdate, autor: {...autorEncontrado._doc}};
            const livroF = await Livro.findByIdAndUpdate(id, livro); 
            res.status(200).json({message: "Livro atualizado com sucesso", Livro: livroF});
        }catch(error){
            res.status(500).send({message: `${error.message} - Erro ao atualizar o livro do ID => ${id}`})
        }
    }

    static async deletar (req, res){
        const id = req.params.id;
        try{
            const livroDeletado = await Livro.findByIdAndDelete(id); 
            res.status(204).json({message: "Livro deletado com sucesso", Livro: livroDeletado});
        }catch(error){
            res.status(500).send({message: `${error.message} - Erro ao deletar o livro do ID => ${id}`})
        }
    }

    static async listaLivrosPorFiltro(req,res){
        const {editora, titulo} = req.query;

        const regex = new RegExp(titulo, 'i');
        const busca = {};
        if(editora) busca.editora = editora;
        if(titulo) busca.titulo =regex;

        try{
            const livrosResultado = await Livro.find({busca});
            res.status(200).json(livrosResultado);
        }catch(error){  
            res.status(500).send({message: `${error.message} - 
                Erro ao buscar livros da editora => ${editora}`})
        }
    }
};

export default LivroController;