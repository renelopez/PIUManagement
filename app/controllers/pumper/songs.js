import Ember from 'ember';

export default Ember.Controller.extend({
  pumperSongs:function(){
    return this.get('model.pumperSongModes');
  }.property('pumperSongModes.@each')
});
