<template>
  <layout-footer-only>
    <template>
      <div class="setting__body">Setting</div>
    </template>
    <template slot="footer">
      <div class="setting__footer" @click="$router.go(-1)">Back</div>
    </template>
  </layout-footer-only>
</template>

<script>
import LayoutFooterOnly from '@/components/layout/LayoutFooterOnly.vue';

export default {
  name: 'setting',
  components: {
    LayoutFooterOnly,
  },
};
</script>

<style>
.setting__footer,
.setting__body {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.setting__footer {
  background: #1e78c8;
  color: #fff;
}
</style>
