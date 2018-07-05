<template>
  <div class="slide-picture">
    <template>
      <button @click='changeI'>button</button>
      <test-component v-test-directive='"test"'>
        <div slot="slot1">{{testData}}</div>
      </test-component>
      <el-carousel indicator-position="outside" type="card">
        <el-carousel-item v-for="(item, index) in picList" :key="index">
          <img :src="item" style="width:300px;height:300px;"/>
        </el-carousel-item>
      </el-carousel>
     <Table :columns="columns1" :data="data1"></Table>
    </template>
  </div>
</template>

<script>
import mixinDemo from '@/CommonJS/mixin/mixinDemo';
import testDirective from '@/CommonJS/directives/directiveDemo';
import TestComponent from './TestComponent';
export default {
  name: 'slidePicture',
  mixins: [mixinDemo],
  directives: {testDirective},
  components: {TestComponent},
  data () {
    return {
      picList: [
        "/static/logo.png",
        "/static/resizeApi.png",
        "/static/timg.jpg",
      ],
      columns1: [
          {
              title: 'Name',
              key: 'name'
          },
          {
              title: 'Age',
              key: 'age'
          },
          {
              title: 'Address',
              key: 'address'
          }
      ],
      data1: [
          {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
          },
          {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
          },
          {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
          },
          {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
          }
      ],
      testData: '234',
    };
  },
  methods: {
    changeI () {this.testData = new Date();},
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
