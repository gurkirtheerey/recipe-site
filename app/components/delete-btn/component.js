import Component from '@ember/component';

export default Component.extend({

  actions: {
    onPress() {
      if(this.get('actionOnPress')) {
        this.get('actionOnPress')();
      }
    }
  }
});
