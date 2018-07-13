<script>
import emitter from '@/CommonJS/mixin/emitter';
export default {
  name: 'MenuItem',
  mixins: [emitter],
  render (h) {
    let self = this;
    const data = {
      on: {
        click: event => {
          this.emitParent('CustomMenu', 'itemClick', self);
        },
      },
    };
    return (
      <li {...data}>
        {this.$slots.default}
      </li>
    );
  },
};
</script>

<style scoped>
</style>
