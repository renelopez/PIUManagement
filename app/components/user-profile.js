import Ember from 'ember';

export default Ember.Component.extend({
  getCalorieClass:function() {
    return this.get('pumper.caloriesBurned') > 2000 ? "hot" : "newbie";
  }.property('pumper.caloriesBurned')
});
