import Component from '@ember/component';

export default Component.extend({
  tagName: 'a',
  classNames: ['primary'],

  actions: {
    test() {
      window.location.href="https://gurkirtheerey.com"
    }
  }
});
