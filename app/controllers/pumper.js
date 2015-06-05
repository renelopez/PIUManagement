import Ember from 'ember';

export default Ember.Controller.extend({
  isHot:function() {
    return this.get('model.caloriesBurned') > 2000;
  }.property()
});
