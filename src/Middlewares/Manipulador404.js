import NaoEncontrado from "../Erros/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function Manipulador404 (req, res, next) {
  const error404 = new NaoEncontrado;
  next(error404);
}

export default Manipulador404;