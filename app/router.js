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
  });
});

export default Router;
