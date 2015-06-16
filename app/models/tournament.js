import DS from 'ember-data';

var Tournament= DS.Model.extend({
  name:DS.attr('string'),
  year:DS.attr('number'),
  pumpersTournaments:DS.hasMany('pumperTournament',{async:true}),
  local:DS.belongsTo('local',{async:true})

});

Tournament.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'PIU International Championship 2015',
      year:'2015',
      pumpersTournaments:[1,2]
    },
    {
      id:2,
      name:'PIU International Championship 2014',
      year:'2014',
      pumpersTournaments:[3,4]
    }
  ]
});

export default Tournament;
