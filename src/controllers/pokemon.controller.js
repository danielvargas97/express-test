const router = require("express").Router();
const { logger } = require("../../logger");
const { getPokemonByName, getAllPokemons } = require("../clients/pokeapi/pokeapi.client");
const { jsonResponse } = require("./responseHelper");

const prefix = "/pokemon";

router.get("/", async (req, res) => {
    const result = await getAllPokemons(req.query.page);
    jsonResponse(res, 200, result);
});

router.get("/:name", async (req, res) => {
    const result = await getPokemonByName(req.params.name);

    jsonResponse(res, 200, result);
});

const pokemonModule = {
    router,
    prefix,
};

module.exports = {
    pokemonModule,
};
