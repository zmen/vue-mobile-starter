<template>
  <layout-footer-only>
    <template>
      <div class="about__body">About</div>
    </template>
    <template slot="footer">
      <div class="about__footer" @click="goBack">Back</div>
    </template>
  </layout-footer-only>
</template>
<script>
import LayoutFooterOnly from '@/components/layout/LayoutFooterOnly.vue';

export default {
  name: 'about',
  components: {
    LayoutFooterOnly,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
  .about__footer,
  .about__body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about__footer {
    background: #1e78c8;
    color: #fff;
  }
</style>
