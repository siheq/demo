<template>
    <div id='app'>
      <!--<div class='login-page'></div>-->
      <div class='login-page'>
        <el-card @keyup.native.enter='login' class='login-form'>
          <el-input type='text' v-model='loginForm.username' placeholder='Account' class='login-input'></el-input>
          <el-input type='password' v-model='loginForm.password' placeholder='Password' class='login-input'></el-input>
        </el-card>
      </div>
    </div>
</template>

<script>
import Layout from '../../components/common/Layout';
import {login} from '../../service/loginPage';

export default {
  name: 'App',
  components: {
    Layout,
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login () {
      try {
        let result = await login(Object.assign({}, this.loginForm));
        if (result.code === 'SUCCESS') {
          this.$message.success('Login Success!!!');
        }
      }
      catch (e) {
        this.$message.error(e);
      }
    },
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
    width: 350px;
    .login-input {
      width: 300px;
      margin: 10px;
    }
  }
}
</style>
