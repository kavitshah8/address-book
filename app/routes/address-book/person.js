import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.debug(params);
    return {
      firstName: 'Alex'
    };
  }
});
