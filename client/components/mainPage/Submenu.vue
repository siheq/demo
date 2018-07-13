<script>
import emitter from '@/CommonJS/mixin/emitter';
export default {
  name: 'Submenu',
  mixins: [emitter],
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
          self.emitParent('CustomMenu', 'submenuClick', self);
        },
      },
    };
    return (
      <li style='display: inline-block'>
          <div class={{
            'submenu': true,
          }} {...data}>
            {this.$slots.title}
          </div>
      </li>
    );
  },
};
</script>

<style scoped>
.submenu {
  display: inline-block;
}
</style>
