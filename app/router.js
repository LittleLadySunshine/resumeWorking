import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home", { path: '/' });
  this.route("offerings");
  this.route("about");
  this.route("contact");
  this.route("projects");
});

export default Router;
