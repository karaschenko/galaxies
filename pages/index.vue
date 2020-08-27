<template>
  <galaxies-list />
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import GalaxiesList from '~/components/pages/GalaxiesList'

export default {
  name: 'index-page',
  components: {
    GalaxiesList, 
  },
  methods: {
    ...mapActions({
      fetchGalaxies: 'galaxies/fetchGalaxies',
    })
  },
  async asyncData({ store }) {
    try {
      store.commit('setPageTitle', 'Named galaxies');
     await store.dispatch('galaxies/fetchGalaxies');
    } catch(e) {
      console.log(e);
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

