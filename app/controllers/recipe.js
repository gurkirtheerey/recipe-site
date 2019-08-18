import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  isExpanded: true,
  didFilter: false,
  inputFilterValue: '',
  filteredRecipes: computed('inputFilterValue', function() {
    const filteredRecipe = this.get('inputFilterValue');
    const model = this.get('model');

    const filtered = model.filterBy('meal', filteredRecipe);
 
    return filtered;

  }),

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
      },

      filterByMeal() {
        const inputFilterValue = this.get('inputFilterValue').toUpperCase();
        const model = this.get('model');
        this.set('didFilter', true);
        if (inputFilterValue != '') {
          const entry = model.filterBy('meal', inputFilterValue);
          return entry;
        } else {
          this.set('didFilter', false);
      }
    }
  },

});