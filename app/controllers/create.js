import Controller from '@ember/controller';

export default Controller.extend({

  name: 'test',
  successful: false,
  loading: false,

  actions: {
    submitRecipe() {
      this.set('loading', true);
      let name = this.get('recipeName');
      let type = this.get('recipeType');
      let calories = this.get('recipeCalories');
      let meal = this.get('recipeMeal');
      let ingredients = this.get('recipeIngredients');
      let ingredientArr = [];
      if (isNaN(calories) || name == null || type == null || meal == null || ingredients == null ) {
        alert(`Please enter the correct values to create your dish!`);
        this.set('successful', false);
        this.set('loading', false);
      } else {
        ingredientArr.push(ingredients.split(' '));

        const entry = this.store.createRecord('recipe', {
          name: name,
          type: type,
          calories: parseInt(calories),
          meal: meal,
          ingredients: ingredientArr,
        }).save().then(res => {
          this.set('');
          this.set('loading', false);
          this.set('recipeName', null);
          this.set('recipeType', null);
          this.set('recipeCalories', null);
          this.set('recipeMeal', null);
          this.set('recipeIngredients', null);
          this.set('successful', true);
          this.set('loading', false); 
          this.set('responseMessage', `Success! Confirmation ID: ${res.id}`)
        })          
         }
    },
  }

});
