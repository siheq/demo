<template>
  <div class='bubble-main' :style='"width:"+width'>
    <div style='border-bottom: 1px solid #0074D9'>
      <slot name='title'>
      </slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BubbleCard',
  props: {
    width: {
      type: String,
      default: '400px',
    },
  },
};
</script>

<style lang='scss' scoped>
.bubble-main {
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
