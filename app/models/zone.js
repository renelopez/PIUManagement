import DS from 'ember-data';

var Zone=DS.Model.extend({
  name:DS.attr('string'),
  pumpers:DS.hasMany('pumper')
});

Zone.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'Noroeste',
      pumpers:[1,2,3,4,5]
    },
    {
      id:2,
      name:'Noroeste',
      pumpers:[]
    },
    {
      id:3,
      name:'Centro',
      pumpers:[]
    },
    {
      id:4,
      name:'Suroeste',
      pumpers:[]
    },
    {
      id:5,
      name:'Sureste',
      pumpers:[]
    }
  ]
});

export default Zone;
