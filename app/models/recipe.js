import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  calories: DS.attr('number'),
  type: DS.attr('string'),
  ingredients: DS.attr('string'),
});
