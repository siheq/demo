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
                  <el-button v-if='isUpdate' class='mission-button' type='primary' size='mini' @click='updateCard(index)'>Update</el-button>
                  <el-button v-else class='mission-button' type='primary' size='mini' @click='saveCard(index)'>Finish</el-button>
                  <el-button class='mission-button' type='danger' size='mini' @click='cancelCard(index)'>Cancel</el-button>
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
import {saveCard} from '@/service/kanban/cardData.ui.service';

export default {
  name: 'Content',
  components: {
    BubbleCard,
  },
  data () {
    return {
      originalData: {},
      cardData: [],
      activeIndex: -1,
      isUpdate: false,
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
        if (this.cardData[index].content) {
          this.originalData = Object.assign({}, this.cardData[index]);
          console.log(this.originalData);
          this.isUpdate = true;
        }
        this.activeIndex = index;
      }
      // if (this.activeIndex === index) {
      //   this.activeIndex = -1;
      // }
      // else {
      //   this.activeIndex = index;
      // }
    },
    async saveCard (index) {
      // To Do call api to save data
      console.log('save card');
      let params = {
        type: 'mission',
        content: this.cardData[index].content,
      };
      let result = await saveCard(params);
      if (result.code === 'SUCCESS') {
        console.log('return data', result.data);
        this.cardData.splice(index, 1, result.data);
        this.activeIndex = -1;
      }
    },
    updateCard (index) {
      console.log('update', index);
      this.activeIndex = -1;
    },
    cancelCard (index) {
      this.activeIndex = -1;
      this.carData = this.cardData.splice(index, 1, Object.assign({}, this.originalData));
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
    .mission-button {
      margin-top: 10px;
    }
  }
}
</style>
