<script>
import emitter from '@/CommonJS/mixin/emitter';
export default {
  name: 'Submenu',
  mixins: [emitter],
  data () {
    return {
      open: false,
      timeOut: null,
    };
  },
  mounted () {
    // let submenuItemList = this.$refs.submenuItemList;
    // submenuItemList.style.top =
  },
  render (h) {
    let self = this;
    const data = {
      // nativeOn: {
      //   click: function (event) {
      //     console.log('menu item click');
      //     self.$emit('submenuClick', event.target.value);
      //   },
      // },
      on: {
        mouseenter: function (event) {
          if (self.timeOut) {
            window.clearTimeout(self.timeOut);
            self.timeOut = null;
          }
          self.open = true;
          // self.emitParent('CustomMenu', 'submenuClick', self);
        },
        mouseleave: function (event) {
          self.timeOut = window.setTimeout(() => {
            self.open = false;
          }, 100);
          // self.open = !self.open;
          // self.emitParent('CustomMenu', 'submenuClick', self);
        },
        on: {
          click: function (event) {
            self.open = true;
            self.emitParent('CustomMenu', 'submenuClick', self);
          },
        },
      },
    };
    const data2 = {
      on: {
        mouseenter: function (event) {
          if (self.timeOut) {
            window.clearTimeout(self.timeOut);
            self.timeOut = null;
          }
          self.open = true;
          // self.emitParent('CustomMenu', 'submenuClick', self);
        },
        mouseleave: function (event) {
          self.timeOut = window.setTimeout(() => {
            self.open = false;
          }, 100);
          // self.open = !self.open;
          // self.emitParent('CustomMenu', 'submenuClick', self);
        },
        on: {
          click: function (event) {
            self.open = true;
            self.emitParent('CustomMenu', 'submenuClick', self);
          },
        },
      },
    };
    // const submenuItemData = {
    //   on: {
    //     click: function (event) {
    //       self.emitParent('CustomMenu', 'submenuClick', self);
    //     },
    //   },
    // };
    return (
      <li style='display: inline-block;padding: 0 10px;position:relative'>
          <div class={{
            'submenu': true,
          }} {...data}>
            {this.$slots.title}
          </div>
          <div refs='submenuItemList' class='submenu-item-list' {...data2}>
            <ul
            class='ul-class'
            v-show={this.open}>
              {this.$slots.default}
            </ul>
          </div>
      </li>
    );
  },
};
</script>

<style lang='scss' scoped>
.submenu {
  display: inline-block;
  cursor: pointer;
}
.submenu-item-list {
  position: absolute;
  left: -5px;
  background: #7f7f7f;
  margin-top: 5px;
  width: 180px;
  .ul-class {
    list-style: none;
    li {
      animation: rotaFrame 0.3s ease-in-out forwards;
      cursor: pointer;
      padding: 0 10px;
      line-height: 40px;
      &:hover {
        background: #303133;;
      }
    }
  }
}
  @keyframes rotaFrame {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
