<template>
  <div class='slide-picture'>
    <!--<template>-->
      <!--<button @click='changeI'>button</button>-->
      <!--<test-component v-test-directive=''test''>-->
        <!--<div slot='slot1'>{{testData}}</div>-->
      <!--</test-component>-->
      <!--<el-carousel indicator-position='outside' type='card'>-->
        <!--<el-carousel-item v-for='(item, index) in picList' :key='index'>-->
          <!--<img :src='item' style='width:300px;height:300px;'/>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
     <!--<Table :columns='columns1' :data='data1'></Table>-->
    <!--</template>-->
    <custome-button @click='test'>testsetset</custome-button>
    <custom-menu>
      <custom-submenu>test</custom-submenu>
      <custom-submenu>test2</custom-submenu>
      <custom-submenu>test3</custom-submenu>
    </custom-menu>
    <div style='height: 300px;margin-left: 500px'>
      <el-steps direction='vertical' :active='2'>
        <el-step title='步骤 1'>
          <div slot='icon' class='time-line-circle'></div>
        </el-step>
        <el-step title='步骤 2'>
          <div slot='icon' class='time-line-circle'></div>
        </el-step>
        <el-step title='步骤 3' description='这是一段很长很长很长的描述性文字'>
          <div slot='icon' class='time-line-point'></div>
        </el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
import mixinDemo from '@/CommonJS/mixin/mixinDemo';
import testDirective from '@/CommonJS/directives/directiveDemo';
import TestComponent from './TestComponent';
import CustomMenu from './Menu';
import CustomSubmenu from './Submenu';
export default {
  name: 'SlidePicture',
  mixins: [mixinDemo],
  directives: {testDirective},
  components: {
    TestComponent,
    CustomMenu,
    CustomSubmenu,
    CustomeButton: {
      functional: true,
      render: function (createElement, context) {
        // 完全透明的传入任何特性、事件监听器、子结点等。
        return createElement('button', context.data, context.children);
      },
    },
  },
  data () {
    return {
      picList: [
        '/static/logo.png',
        '/static/resizeApi.png',
        '/static/timg.jpg',
      ],
      columns1: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        },
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
        },
      ],
      testData: '234',
    };
  },
  methods: {
    changeI () {
      this.testData = new Date();
    },
    test () {
      console.log('click button');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
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
  .time-line-circle {
    border-radius: 50%;
    background-color: #0074D9;
    width: 20px;
    height: 20px;
  }
  .time-line-point {
    border-radius: 50%;
    background-color: #0074D9;
    width: 10px;
    height: 10px;
  }
</style>
