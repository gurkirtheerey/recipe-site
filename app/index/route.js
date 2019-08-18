import Route from '@ember/routing/route';

export default Route.extend({
 

  actions: {
    transitions() {
      this.transitionTo('recipe');
    }
  }
});
