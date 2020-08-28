const setGalaxies = (state, payload) => {
    state.galaxies = payload;
};

const setSearchedGalaxies = (state, payload) => {
    state.searchedGalaxies = payload;
};

const updateGalaxies = (state, payload) => {    
    state.searchedGalaxies = state.galaxies.filter((galaxie) => {
        return galaxie.name.toLowerCase().includes(payload.toLowerCase());
   })
};

const sortGalaxies = (state, payload) => {
    if (!payload) {
        state.searchedGalaxies = state.searchedGalaxies.sort((a, b) => {        
            if (a.id > b.id) {
                return 1;
              }
              if (a.id < b.id) {
                return -1;
              }
              return 0;
        })
    }
    if (payload === 'asc') {
        state.searchedGalaxies = state.searchedGalaxies.sort((a, b) => {        
            if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
        })
    }
    if (payload === 'desc') {
        state.searchedGalaxies = state.searchedGalaxies.sort((a, b) => {        
            if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
        })
    }
}

const setGalaxy = (state, payload) => {
    state.galaxy = state.galaxies.find((i) => i.id === +payload);
};


export default {
    setGalaxies,
    setSearchedGalaxies,
    setGalaxy,
}