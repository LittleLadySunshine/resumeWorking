import Ember from 'ember';

export default Ember.Route.extend({
  didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, function() {
          this.refresh();
      });
  }
});
