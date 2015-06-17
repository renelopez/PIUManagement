import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index',{path:'/'});
  this.resource('pumpers');
  this.resource('pumper',{path:'/pumpers/:pumper_id'},function(){
    this.resource('pumper.addresses',{path:'/addresses'});
    this.resource('pumper.locals',{path:'/locals'});
    this.resource('pumper.songs',{path:'/songs'});
    this.resource('pumper.tournaments',{path:'/tournaments'});
  });
  this.resource('tournament',{path:'/tournament/:tournament_id'},function(){

  })
});

export default Router;
