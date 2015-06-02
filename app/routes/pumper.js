import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.store.find('pumper', params.pumper_id);
  }
});
