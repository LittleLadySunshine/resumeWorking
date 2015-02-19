import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    sendEmail: function(){
      var full_name = this.get('postName');
      var email = this.get('postEmail');
      var message = this.get('postMessage');

      // debugger;

      var message = this.store.createRecord('message', {
        full_name: full_name,
        email: email,
        message: message
      }); 

      message.save().then(function(){
          this.set('postName', '');
          this.set('postEmail', '');
          this.set('postMessage', '');
      }.bind(this));

    }
  }
});
