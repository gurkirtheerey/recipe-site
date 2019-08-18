import Route from '@ember/routing/route';

export default Route.extend({
  
  model() {
    return this.store.findAll('recipe');
  },

  setupController(controller, model) {
    controller.set('recipe', model);
  },
  

});
