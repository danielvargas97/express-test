const {Axios} = require('axios');

const pokeClient = new Axios({
    baseURL : "https://pokeapi.co/api/v2/",
    timeout: 5000,
});
const limitPage = 30;

const getPokemonByName = async (name) => {
    try {
        const pokemon = await pokeClient.get(`/pokemon/${name}`)
        return pokemon.data
    } catch (error) {
        console.error("Error while querying pokeapi", error)
    }
};

const getAllPokemons = async (page = 0) => {
    try {
    
        const offsetVal = parseInt(page)*limitPage

        const pokemon = await pokeClient.get(`/pokemon?limit=${limitPage}&offset=${offsetVal}`)
        return pokemon.data
    } catch (error) {
        console.error("Error while querying pokeapi", error)
    }
};



module.exports = {
    getPokemonByName,
    getAllPokemons
}