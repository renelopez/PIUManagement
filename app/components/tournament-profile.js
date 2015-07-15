import Ember from 'ember';

export default Ember.Component.extend({
  attendeeCount:function(){
    return this.get('tournament.pumpersTournaments').get('length');
  }.property('tournament.pumpersTournaments.@each')
});
