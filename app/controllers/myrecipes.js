import Controller from '@ember/controller';
import { computed } from '@ember/object';
 
export default Controller.extend({

  loading: false,

  actions: {
    testing() {
        this.set('loading', true);
        console.log(this.get('recipe'));

        if (this.get('recipe').length == 0) {
          alert('Please populate your recipe book!');
          this.set('destroyName', '');
        } else {
          let test = this.get('destroyName');
          let deleteAction = this.get('recipe').findBy('name', test);
          deleteAction.deleteRecord();
          deleteAction.save();
          this.set('destroyName', '');
          this.set('loading', false);
      }
     },

    // sendActions(index) {
    //   const store = this.store.findRecord('recipe', '-LmaDVXXfxVcGxvrjHYT');
    //   console.log(store);
    //   store.
    //   console.log('deleted! at index' + index);  
    // }
  }
});
