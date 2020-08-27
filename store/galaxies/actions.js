const fetchGalaxies = async function fetchGalaxies({ commit }) {
    try {
        const { data } = await this.$axios.get('/galaxies');
        commit('setGalaxies', data);
        commit('setSearchedGalaxies', data);
    } catch(e) {
        console.log('error with fetching galaxies', e.message);
    }
}

export default {
    fetchGalaxies,
}