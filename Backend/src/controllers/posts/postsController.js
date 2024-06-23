const { response } = require("express");
const { postCollection } = require("../../database/models/posts_models");

const addPostController = async (req, res, next) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;
    const response = await postCollection.agregarPost(
      titulo,
      img,
      descripcion,
      likes
    );
    res.send(response);
    console.log("Controlador nuevo de agregar");
  } catch (error) {
    next(error);
  }
};

const getPostController = async (req, res, next) => {
  try {
    const response = await postCollection.obtenerPosts();
    res.send(response);
    console.log("Controlador nuevo de consultar");
  } catch (error) {
    next(error);
  }
};

const modPostController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { likes } = req.query;
    const response = await postCollection.modificarPosts(id, likes);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const delPostController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await postCollection.eliminarPosts(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPostController,
  getPostController,
  modPostController,
  delPostController,
};
