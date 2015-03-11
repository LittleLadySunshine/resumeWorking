import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home", { path: '/' });
  this.route("offerings");
  this.route("about");
  this.resource("message");
  this.route("projects");
  this.route('formalres');
});

export default Router;
