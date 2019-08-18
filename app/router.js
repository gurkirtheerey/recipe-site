import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipe');
  this.route('create');
  this.route('myrecipes');
  this.route('contact');
});

export default Router;
