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
  /*width: 400px;*/
  padding: 10px;
  border: 1px solid #3e6780;
  display: inline-block;
}
</style>
