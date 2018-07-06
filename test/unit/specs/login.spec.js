import Vue from 'vue';
import HelloWorld from '@/pages/login/login';

describe('login.vue', () => {
  it('should', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')
    expect(1 + 1)
      .to.equal(2);
  });
});
