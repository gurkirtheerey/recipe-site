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
 
    sendActions(index) {
      const model = this.get('model');
      const entry = this.store.createRecord('recipe', {
        name: model[index].name,
        calories: model[index].calories,
        type: model[index].type,
        meal: model[index].meal,
        ingredients: model[index].ingredients,
       });
       entry.save();
      }
  },

});