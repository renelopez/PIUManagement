import DS from 'ember-data';

var Local= DS.Model.extend({
  name:DS.attr('string'),
  address:DS.belongsTo('address'),
  startTime:DS.attr('number'),
  endTime:DS.attr('number'),
  startDay:DS.attr('string'),
  endDay:DS.attr('string'),
  machine:DS.hasMany('machine'),
  tournaments:DS.hasMany('tournament',{async:true})
});

Local.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'Rockoparty',
      address:6,
      startTime:900,
      endTime:2130,
      startDay:'Monday',
      endDay:'Sunday',
      machine:[1,2]
    },
    {
      id:2,
      name:'La Aurora',
      address:7,
      startTime:900,
      endTime:2130,
      startDay:'Monday',
      endDay:'Sunday',
      machine:[3]
    }
  ]
});

export default Local;
