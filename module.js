const { pokemonModule } = require("./src/controllers/pokemon.controller");
const { rickAndMortyModule } = require("./src/controllers/rickAndMorty.controller");
const { starWarsModule } = require("./src/controllers/starwars.controller");

const defaultModules = [rickAndMortyModule, pokemonModule, starWarsModule]


const loadModules = (app, modules = defaultModules) => {
    
    modules.forEach(module => {
      app.use(module.prefix, module.router);  
    });
}

module.exports = {
    loadModules
}