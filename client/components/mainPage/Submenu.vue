<script>
import emitter from '@/CommonJS/mixin/emitter';
export default {
  name: 'Submenu',
  mixins: [emitter],
  data () {
    return {
      open: true,
    };
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
        click: function (event) {
          self.open = !self.open;
          self.emitParent('CustomMenu', 'submenuClick', self);
        },
      },
    };
    return (
      <li style='display: inline-block;padding: 10px'>
          <div class={{
            'submenu': true,
          }} {...data}>
            {this.$slots.title}
          </div>
          <ul
          class='ul-class'
          v-show={this.open}>
            {this.$slots.default}
          </ul>
      </li>
    );
  },
};
</script>

<style scoped>
.submenu {
  display: inline-block;
}
.ul-class {
 list-style: none;
}
</style>
