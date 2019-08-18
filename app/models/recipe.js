import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  calories: DS.attr('number'),
  type: DS.attr('string'),
  ingredients: DS.attr('string'),
});
