<template>
<div class="page-header">
    <h1 class="page-header__title"> {{ title ? title : pageTitle }} </h1>
    <slot />
</div>
</template>

<style lang="scss" scoped>
    .page-header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 54px;

        @media screen and (max-width: $mobile) {
            flex-wrap: wrap;
            margin-bottom: 24px;
        }

        &__title {
            margin: 0;
            font-size: 34px;
            line-height: 40px;
            font-weight: 500;            

            @media screen and (max-width: $mobile) {
                width: 100%;
            }
        }
    }
</style>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'page-header',
        props: {
            title: String
        },
        computed: {
            ...mapState({ pageTitle: state => state.pageTitle }),
        },    
    }
</script>