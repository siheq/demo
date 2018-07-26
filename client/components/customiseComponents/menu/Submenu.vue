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
        click: function (event) {
          self.open = true;
          self.emitParent('CustomMenu', 'submenuClick', self);
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
      <li style='display: inline-block;position:relative'>
          <div class={{
            'submenu': true,
          }} {...data}>
            {this.$slots.title}
          </div>
          <div refs='submenuItemList' class='submenu-item-list' {...data}>
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
  margin-top: 5px;
  width: 180px;
  .ul-class {
    list-style: none;
    li {
      animation: tmp 0.3s ease-in-out forwards;
      background: #7f7f7f;
      cursor: pointer;
      padding: 0 10px;
      line-height: 40px;
      opacity: 0;
      &:hover {
        background: #303133;;
      }
    }
  }
}
  @keyframes rotaFrame {
    from {
      opacity: 0;
      transform: translateX(30px) rotateY(90deg);
    }
    to {
      opacity: 1;
      transform: translateX(0) rotateY(0);
    }
  }
  @keyframes tmp {
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
