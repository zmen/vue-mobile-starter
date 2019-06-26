<template>
  <div class="common-layout">
    <div class="common-layout__header">
      <slot name="header"></slot>
    </div>
    <div class="common-layout__body">
      <slot></slot>
    </div>
    <div class="common-layout__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-common',
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/modules/measurement";
  .common-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &__header {
      height: $heightOfHeader;
      flex-shrink: 0;
    }
    &__body {
      flex: 1;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }
    &__footer {
      height: $heightOfFooter;
      flex-shrink: 0;
    }
  }
</style>
