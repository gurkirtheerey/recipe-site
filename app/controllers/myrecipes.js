import Controller from '@ember/controller';
import { computed } from '@ember/object'; 

export default Controller.extend({

  loading: false,
  isDisabled: false,

  // test: computed('isDisabled', function() {
  //   if (this.get('model').length <= 0) {
  //     this.set('isDisabled', true);
  //   } else {
  //     this.set('isDisabled', false);
  //   }
  // }),

  // testing

  actions: {
    testing() {
        if (this.get('model').length == 0) {
          alert('Please populate your recipe book!');
          this.set('destroyName', '');
        } else {
          this.set('loading', true);
          let test = this.get('destroyName');
          let deleteAction = this.get('model').findBy('name', test);
          deleteAction.deleteRecord();
          deleteAction.save();
          this.set('loading', false);
          alert('Removed!');   
      }
    }
  }
});
