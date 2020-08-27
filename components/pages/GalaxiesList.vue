<template>
    <div class="galaxies">
        <page-header>
            <search-form />
        </page-header>
        <div class="galaxies__table">
            <div class="galaxies__row galaxies__row_heading">
                <div class="galaxies__cell galaxies__cell_heading" @click="sortGalaxies">
                    Galaxy Name
                    <div v-if="currentSort" :class="{galaxies__sort_desc : currentSort === 'desc'}" class="galaxies__sort" />
                </div>
                <div class="galaxies__cell galaxies__cell_heading">Constellation</div>
                <div class="galaxies__cell galaxies__cell_heading">Origin of name</div>
            </div>
            <nuxt-link
                v-for="galaxy in galaxies"
                :key="galaxy.id"
                :to="`/galaxy/${galaxy.id}`"
                class="galaxies__row">
                    <div class="galaxies__cell">
                        <img :src="galaxy.img ? galaxy.img : '/icons/not-found-icon.png'" :alt="galaxy.name" class="galaxies__icon">
                        {{ galaxy.name }}
                    </div>
                    <div class="galaxies__cell">
                        {{ galaxy.constellation }}
                    </div>
                    <div class="galaxies__cell">
                        {{ galaxy.originOfName }}
                    </div>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .galaxies {
        font-family: $font-family;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;       

        &__row {
            display: flex;
            width: 100%;
            flex: 1 100%;

            @media screen and (max-width: $mobile) {
                &_heading {
                    display: none;
                }

                &:not(.galaxies__cell_heading) {
                    flex-wrap: wrap;
                    border: 1px solid $border-color;
                    border-top: 0;
                    margin-bottom: 24px;
                }
                
                .galaxies__cell:first-child:hover, .galaxies__cell:first-child:active {
                    background: rgba(97, 128, 239, 0.2);
                }
            }

            &:hover:not(&_heading) {
                background: rgba(97, 128, 239, 0.2);

                @media screen and (max-width: $mobile) {
                    background: #fff;
                }
            }            
        }

        &__cell {
            position: relative;
            border-right: 1px solid $border-color;
            border-bottom: 1px solid $border-color;
            display: flex;
            align-items: center;
            flex: 1 1 200px;
            padding: 10px 15px;
            font-size: 16px;
            line-height: 24px;
            font-weight: 300;

            &::before {
                display: none;
                top: 8px;
                left: 15px;
                position: absolute;
                font-size: 10px;
                line-height: 14px;
                color: $table-head-color;

                @media screen and (max-width: $mobile) {
                    display: block;
                }
            }

            @media screen and (max-width: $mobile) {
                flex: auto;
                width: 100%;
                border: 0;
                border-top: 1px solid $border-color;
                padding-top: 30px;
                font-size: 14px;
                line-height: 17px;
            }
            
            &_heading {
                border-right: 0;
                border-left: 0;
                padding-left: 5px;
                font-size: 12px;
                line-height: 14px;
                text-transform: uppercase;
                color: $table-head-color;
                font-weight: normal;

                 @media screen and (max-width: $mobile) {
                    display: none;
                }
            }

            &:first-child {
                border-left: 1px solid $border-color;
                flex-grow: 1;
                font-weight: normal;

                &::before {
                    content: 'Galaxy Name';
                    color: $text-color;                  
                }

                &.galaxies__cell_heading {
                    border-left: 0;
                    padding-bottom: 15px;                    
                    font-weight: 900;
                    color: $text-color;
                    cursor: pointer;
                }

                @media screen and (max-width: $mobile) {
                    line-height: 20px;
                }
            }

            &:nth-child(2) {
                flex-grow: 0.75;

                &::before {
                    content: 'Constellation';                  
                }
            }

            &:nth-child(3) {
                flex-grow: 2;

                &::before {
                    content: 'Origin of name';                  
                }
            }
        }

        &__sort {
            background: url('/icons/sort-icon.svg');
            width: 9.6px;
            height: 9.6px;
            margin-left: 10px;

            &_desc {
                transform: rotate(180deg);
            }
        }

        &__icon {
            display: block;
            padding: 5px;
            margin-right: 15px;
            width: 30px;
            height: 30px;

            @media screen and (max-width: $mobile) {
                padding: 0;
            }
        }
    }
</style>
<script>
    import { mapState, mapMutations } from 'vuex';
    import PageHeader from '~/components/common-components/PageHeader';
    import SearchForm from '~/components/common-components/SearchForm';
    export default {
        name: 'galaxies-list', 
        components: {
            PageHeader,
            SearchForm,
        },
        data() {
            return {
                currentSort: '',
                sortValues: ['asc', 'desc'],
            }
        },
        computed: {
            ...mapState({ galaxies: state => state.galaxies.searchedGalaxies }),
        },
        methods: {
            ...mapMutations({
                setSortGalaxies: 'galaxies/sortGalaxies'
            }),
            sortGalaxies() {
                const currSortIndex = this.sortValues.findIndex(value => value === this.currentSort);
                this.currentSort = this.sortValues[currSortIndex+1];
                this.setSortGalaxies(this.currentSort);
            },
        },      
    }
</script>