<template>
  <div class="slide-picture">
    <template>
      <el-carousel indicator-position="outside" type="card">
        <el-carousel-item v-for="(item, index) in picList" :key="index">
          <img :src="item" style="width:300px;height:300px;"/>
        </el-carousel-item>
      </el-carousel>
    </template>  
  </div>
</template>

<script>
export default {
  name: 'slidePicture',
  data () {
    return {
      picList: [
        "/static/logo.png",
        "/static/resizeApi.png",
        "/static/timg.jpg",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  } 
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
