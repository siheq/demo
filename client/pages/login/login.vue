<template>
    <div id='app'>
      <!--<div class='login-page'></div>-->
      <div class='login-page'>
        <el-card class='login-form'>
          <el-input type='text' placeholder='Account' class='login-input'></el-input>
          <el-input type='password' placeholder='Password' class='login-input'></el-input>
        </el-card>
      </div>
    </div>
</template>

<script>
import Layout from '../../components/common/Layout';
export default {
  name: 'App',
  components: {
    Layout,
  },
  data () {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang='scss' scoped>
.login-page {
  position:absolute;
  left:0px;top:0px;
  width:100%;
  height:100%;
  z-Index:-1;
  background: url('../../assets/picture.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /*border:1px solid blue;*/
  .login-form {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 300px;
    .login-input {
      width: 250px;
      margin: 10px;
    }
  }
}
</style>
