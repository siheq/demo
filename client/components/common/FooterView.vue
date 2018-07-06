<template>
  <div class='footer'>
    <span class='footer-font'>
      这是一个footer
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
};
</script>

<style>
  .footer {
    position: absolute;
    height: 80px;
    width: 100%;
    top: 100%;
    background-color: rgb(165, 165, 165);
    transform: translateY(-100%);
    opacity: 0.5;
    text-align: center;
  }
  .footer-font {
    color: black;
    opacity: 1;
  }
</style>

