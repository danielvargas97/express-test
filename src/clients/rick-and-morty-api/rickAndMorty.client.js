const {Axios} = require('axios');
const { logger } = require('../../../logger');

const rickAndMortyClient = new Axios({
    baseURL : " https://rickandmortyapi.com/api",
    timeout: 5000,
});


const getAllCharacters =  async (page = 1) => {
    try {

        logger.debug(`Querying at page ${page}`);
        const chars = await rickAndMortyClient.get(`/character?page=${page}`)
        return chars.data;
    } catch (error) {
        logger.error("Error while querying rick and morty api", error)
    }
}


const getCharacter =  async(characterId) => {
    try {

        const result = await rickAndMortyClient.get(`/character/${characterId}`)
        return result.data;
    } catch (error) {
        logger.error("Error while querying rick and morty api", error)
    }
}


module.exports = {
    getCharacter,
    getAllCharacters
}