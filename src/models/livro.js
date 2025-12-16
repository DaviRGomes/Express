import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    titulo: {
        type: String, 
        required: [true, "O título do livro é obrigatório"]
    },
    paginas: {
        type: Number,
        validate: {
            validator : (valor) => {
            return valor > 0 && valor <= 500;
        },
        message: (props) => `O livro deve ter entre 1 e 500 páginas, valor fornecido: ${props.value}`
    }

        // min: [1, "O livro deve ter no mínimo 1 página, valor fornecido: {VALUE}"],
        // max: [500, "O livro deve ter no máximo 500 páginas, valor fornecido: {VALUE}"]
    },
    preco: {type: Number},
    editora: {
        type: String,
        enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora fornecida não é um valor permitido."
        }
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "autores", 
        required: [true, "O autor do livro é obrigatório"]
    },
}, {versionKey: false}); 

const Livro = mongoose.model("livros", livroSchema);

export default Livro;

