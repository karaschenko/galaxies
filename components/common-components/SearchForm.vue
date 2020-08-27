<template>
    <div class="search-form">
        <div class="search-form__icon" />
        <input
            v-model="searchField"
            type="text"
            placeholder="Search galaxies"
            class="search-form__input"
            @input="updateGalaxies(searchField)"
        >
    </div>
</template>

<style lang="scss" scoped>
    .search-form {
        position: relative;
        width: 271px;
        height: 36px;

        @media screen and (max-width: $mobile) {
                margin-top: 13px;
        }

        &__icon {
            background: url('/icons/search-icon.svg') no-repeat center;
            width: 15.75px;
            height: 15.75px;
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
        }

        &__input {
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid #E0E0E0;
            border-radius: 4px;
            padding-left: 46px;
            font-size: 14px;
            line-height: 20px;
            color: #909597;            
        }
    }
</style>
<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'search-form',
        data() {
            return {
                searchField: '',
            }
        },
        methods: {
            ...mapMutations({
                updateGalaxies: 'galaxies/updateGalaxies'
            }),
            // It is good idea to use debounce, but we provide search on front-end
            searchGalaxies() {
                return this.updateGalaxies(this.searchField);
            }            
        },
    }
</script>