import Ember from 'ember';

export default Ember.Component.extend({
  attendeeCount:function(){
    this.get('tournament.pumpersTournaments').then(function(pumperTournaments) {
      pumperTournaments.forEach(function (pumperTournament){
        console.log(pumperTournament.get('place'));
        pumperTournament.get('pumper').then(function(pumper){
            console.log(pumper.get('name'));
        })
      })
    });
  }.property()
});
