<template>
  <div class='header'>
      <!-- <div class='menu-bar'>
        <div class='menu-item'>
          <img style='width:80px;' src='/static/resizeApi.png' />
        </div>
        <div class='menu-item'>|</div>
        <div class='menu-item'>Menu</div>
        <div class='menu-item signin'>Sign In</div>
      </div> -->
    <el-menu
      :default-active='activeIndex'
      class='el-menu-demo'
      mode='horizontal'
      @select='handleSelect'
      background-color='#545c64'
      text-color='#fff'
      active-text-color='#ffd04b'>
      <div style='display:inline;float:left;margin-top:5px;margin-right:10px;'><img style='width:50px;' src='/static/resizeApi.png'></div>
      <el-menu-item index='1'>处理中心</el-menu-item>
      <el-submenu index='2'>
        <template slot='title'>我的工作台</template>
        <el-menu-item index='2-1'>选项1</el-menu-item>
        <el-menu-item index='2-2'>选项2</el-menu-item>
        <el-menu-item index='2-3'>选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index='3' disabled>消息中心</el-menu-item>
      <el-menu-item index='4'><a href='https://www.ele.me' target='_blank'>订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
    };
  },
  inject: ['test'],
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted () {
    console.log(this.test, 'mounted');
  },
  watch: {
    test: {
      immediate: true,
      handler: function (val) {
        console.log(val, 'watch');
      },
    },
  },
};
</script>

<style>
  .menu-item {
    display: inline;
    margin: 10px;
  }

  .menu-bar {
    width: 100%;
    height: 100px;
    background-color: darkgray;
  }

  .icon {
    background: url('../../assets/resizeApi.png');
  }
</style>

