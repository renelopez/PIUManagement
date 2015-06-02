import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index',{path:'/'});
  this.resource('pumpers',function(){
      this.resource('pumper',{path:'/:pumper_id'});
  });
});

export default Router;
