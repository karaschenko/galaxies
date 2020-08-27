<template>
  <div class="app">
    <app-sidebar />
    <nuxt class="app__main" />
  </div>
</template>

<style lang='scss' scoped>
  .app {
    display: flex;
    width: 100%;
    color: $text-color;

    @media screen and (max-width: $mobile) {
      flex-wrap: wrap;      
    }

    .app__main {
      padding: 70px 60px;

      @media screen and (max-width: $mobile) {
        padding: 17px 15px;    
      }

    }
  }
</style>

<script> 
import AppSidebar from '~/components/common-components/AppSidebar';

export default {
  components: {
    AppSidebar,
  }
}
</script>

