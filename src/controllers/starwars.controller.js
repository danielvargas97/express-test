const { getAllCharacters, getCharacter } = require("../clients/star-wars-api/starWars.client");
const { jsonResponse } = require("./responseHelper");

const router = require("express").Router();
const prefix = '/starwars';



router.get("/chars", async (req, res) => {
  const result = await getAllCharacters(req.query.page);

  return jsonResponse(res, 200, result);
});

router.get("/chars/:id", async (req, res) => {
  const result = await getCharacter(req.params.id);

  return jsonResponse(res, 200, result);
});


const starWarsModule = {
  router,
  prefix
}

module.exports = {
  starWarsModule
};
