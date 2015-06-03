import DS from 'ember-data';

var Machine= DS.Model.extend({
  name:DS.attr('string'),
  MK:DS.attr('string'),
  model:DS.attr('string'),
  gameVersion:DS.attr('string'),
  creditPrice:DS.attr('number'),
  local:DS.belongsTo('local')
});

Machine.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'Veronica',
      MK:'9',
      model:'GX',
      gameVersion:'PRIME',
      creditPrice:'5',
      local:1
    },
    {
      id:2,
      name:'HulkBuster',
      MK:'9',
      model:'GX',
      gameVersion:'PRIME',
      creditPrice:'5',
      local:1
    },
    {
      id:3,
      name:'Tere',
      MK:'9',
      model:'Hybrid',
      gameVersion:'Fiesta2',
      creditPrice:'4',
      local:2
    }
  ]
});

export default Machine;
