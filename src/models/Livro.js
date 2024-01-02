import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: mongoose.Schema.Types.String, required: true},
    editor: {type: mongoose.Schema.Types.String},
    price: {type: mongoose.Schema.Types.Number, required: true},
    pages: {type: mongoose.Schema.Types.String},
}, {versionKey: false});

const livro = mongoose.model('livros', livroSchema);

export default livro;