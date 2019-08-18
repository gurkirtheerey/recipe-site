import Controller from '@ember/controller';

export default Controller.extend({

  isExpanded: true,
 
  actions: {
    expandInfo() {
       this.toggleProperty('isExpanded');
    },
    transitions() {
      this.transitionToRoute('create');
    },
  }
});