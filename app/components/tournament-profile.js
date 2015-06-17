import Ember from 'ember';

export default Ember.Component.extend({
  attendeeCount:function(){
    console.log(this.get('tournament'));
  }.property()
});
