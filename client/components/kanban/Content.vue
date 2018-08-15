<template>
  <div>
    <el-row :gutter='20'>
      <el-col :offset='1' :span='8'>
        <div class='mission-panel'>
          <div class='mission-title'>Mission</div>
          <div class='mission-item' v-for='(item, index) in cardData'>
            <div @dblclick='clickCard(index)'>
              <bubble-card>
                <div v-if='activeIndex === index'>
                  <el-input
                    style='padding-top: 10px'
                    type='textarea'
                    :rows='2'
                    placeholder='请输入内容'
                    v-model='cardData[index].content'>
                  </el-input>
                  <el-button type='primary' size='mini' @click='saveCard'>Finish</el-button>
                </div>
                <div v-else>
                  {{item.content}}
                </div>
              </bubble-card>
            </div>
          </div>
          <div>
            <a @click='addMission' href='javascript:void(0)'>Add Card</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BubbleCard from '../customiseComponents/bubbleCard/BubbleCard';
export default {
  name: 'Content',
  components: {
    BubbleCard,
  },
  data () {
    return {
      cardData: [],
      activeIndex: -1,
    };
  },
  methods: {
    addMission () {
      this.cardData.push({
        content: '',
      });
    },
    clickCard (index) {
      if (this.activeIndex !== index) {
        // console.log('click card');
        this.activeIndex = index;
      }
      // if (this.activeIndex === index) {
      //   this.activeIndex = -1;
      // }
      // else {
      //   this.activeIndex = index;
      // }
    },
    saveCard () {
      // To Do call api to save data
      console.log('save card');
      this.activeIndex = -1;
    },
  },
};
</script>

<style lang='scss' scoped>
.test{
  padding: 50px;
}
.mission-panel {
  padding: 20px;
  .mission-title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .mission-item {
    margin: 10px 0;
  }
}
</style>
