<template>
  <div class="sidebar" />
</template>

<style lang="scss" scoped>
    .sidebar {
        width: $sidebar-width;
        background: #F9FAFB;
        min-height: 99vh;

        @media screen and (max-width: $mobile) {
            width: 100%;
            min-height: 70px;
        }
    }
</style>

<script>
    export default {
        name: 'app-sidebar',
    }
</script>
