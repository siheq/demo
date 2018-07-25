<template>
  <div id='app'>
    <layout></layout>
  </div>
</template>

<script>
import Layout from '../../components/common/Layout';
export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style lang='scss'>
  @import '../../assets/stylesheets/common.css';
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-step__head.is-finish {
  color: #c0c4cc;
  border-color: #c0c4cc;
}
.el-step__title.is-finish {
  color: black;
}
.el-step:first-of-type {
  .el-step__line {
    background-color: white;
    .el-step__line-inner {
      border-style: dashed;
    }
  }
}
.el-step__icon.is-text {
 border: none;
}
.el-step:last-of-type {
  .el-step__icon.is-text {
    height: 3px;
  }
}
</style>
