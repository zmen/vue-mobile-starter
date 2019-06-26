<template>
  <common-layout>
    <template>
      <div class="home__body">
        <img class="home__logo" src="../assets/logo.png" alt="logo">
        <base-button></base-button>
      </div>
    </template>
    <template slot="footer">
      <div class="home__footer">
        <div class="home__nav">Home</div>
        <div class="home__nav" @click="$router.push('/about')">About</div>
      </div>
    </template>
  </common-layout>
</template>

<script>
import CommonLayout from '@/components/layout/LayoutCommon.vue';

export default {
  name: 'home',
  components: {
    CommonLayout,
  },
};
</script>

<style lang="scss" scoped>
  .home__body,
  .home__footer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home__body {
    background: #e7e7e7;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
  }
  .home__nav {
    font-weight: bold;
    flex: 1;
  }
  .home__logo {
    margin-bottom: 44px;
  }
</style>
