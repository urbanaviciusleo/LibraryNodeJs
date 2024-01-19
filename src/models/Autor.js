import { mongoose } from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId},
  nome: {type: mongoose.Schema.Types.String, required: [true, "Nome é obrigatório"]},
  nacionalidade: {type: mongoose.Schema.Types.String},
});

const autor = mongoose.model("autores", autorSchema);
export {autor, autorSchema};