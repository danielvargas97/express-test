const router = require("express").Router();
const prefix = '/rick';

const {getAllCharacters,getCharacter } = require("../clients/rick-and-morty-api/rickAndMorty.client");
const { jsonResponse } = require("./responseHelper");

router.get("/chars", async (req, res) => {
  const result = await getAllCharacters(req.query.page);

  return jsonResponse(res, 200, result);
});

router.get("/chars/:id", async (req, res) => {
  const result = await getCharacter(req.params.id);

  return jsonResponse(res, 200, result);
});


const rickAndMortyModule = {
  router,
  prefix
}

module.exports = {
  rickAndMortyModule
};
