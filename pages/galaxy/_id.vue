<template>
    <div class="galaxy">
        <page-header :title="galaxy.name"/>

        <div class="galaxy__block">
            <img :src="galaxy.img ? galaxy.img : '/icons/not-found-icon.png'" :alt="galaxy.name">
            <div class="galaxy__constellation">
                {{ galaxy.constellation }}
            </div>
            <div class="galaxy__origin">
                {{ galaxy.originOfName }}
            </div>            
        </div>
    </div>    
</template>

<style lang="scss" scoped>

.galaxy {
    width: 100%;

    &__block {
        margin: 0 auto;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid $border-color;
        width: 100%;
        font-family: $font-family;
        font-size: 20px;
        line-height: 30px;
    }

    &__constellation {
        margin: 15px auto;
    }
}
    

</style>

<script>
    import { mapState, mapMutations } from 'vuex';
    import PageHeader from '~/components/common-components/PageHeader';
    export default {
        name: 'galaxy',
        computed: {
            ...mapState({ galaxy: state => state.galaxies.galaxy }),
        },
        components: {
            PageHeader
        },
        async asyncData({ store, params }) {
            try {
                await store.commit('galaxies/setGalaxy', params.id);
            } catch(e) {
                console.log(e);
            }
        }
    }
</script>