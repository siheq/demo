<template>
  <div class='hello'>
    <el-upload
      class='upload-demo'
      action='https://jsonplaceholder.typicode.com/posts/'
      :on-preview='handlePreview'
      :on-remove='handleRemove'
      :before-remove='beforeRemove'
      multiple
      :limit='3'
      :on-success='handleSuccess'
      :on-exceed='handleExceed'
      :file-list='fileList'>
      <el-button size='small' type='primary'>点击上传</el-button>
      <div slot='tip' class='el-upload__tip'>只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <bubble-card>
      <div slot='title'>12312</div>
    </bubble-card>
  </div>
</template>

<script>
import BubbleCard from '@/components/customiseComponents/bubbleCard/BubbleCard';
export default {
  name: 'HelloWorld',
  data () {
    return {
      fileList: [],
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    BubbleCard,
  },
  methods: {
    handlePreview () {},
    handleRemove () {},
    beforeRemove () {},
    handleExceed () {},
    handleSuccess (response, file, fileList) {
      console.log(response);
      console.log(file);
      console.log(fileList);
      this.fileList.push(file);
      console.log(this.fileList);
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
