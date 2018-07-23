<script>
import emitter from '@/CommonJS/mixin/emitter';
export default {
  name: 'Submenu',
  mixins: [emitter],
  data () {
    return {
      open: false,
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
          self.open = !self.open;
          // self.emitParent('CustomMenu', 'submenuClick', self);
        },
        mouseleave: function (event) {
          self.open = !self.open;
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
      <li style='display: inline-block;padding: 10px' {...data}>
          <div class={{
            'submenu': true,
          }}>
            {this.$slots.title}
          </div>
          <div refs='submenuItemList' class='submenu-item-list'>
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
  width: 200px;
  .ul-class {
    list-style: none;
  }
}
</style>
