import DS from 'ember-data';

var Tournament= DS.Model.extend({
  name:DS.attr('string'),
  year:DS.attr('number'),
  logoURL:DS.attr('string'),
  pumpersTournaments:DS.hasMany('pumperTournament',{async:true}),
  local:DS.belongsTo('local',{async:true})

});

Tournament.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'PIU International Championship 2015',
      year:'2015',
      logoURL:'http://www.doublepump.com/Content/doublepump/img/tournaments/1.gif',
      pumpersTournaments:[1,2],
      local:1
    },
    {
      id:2,
      name:'PIU International Championship 2014',
      year:'2014',
      logoURL:'http://www.doublepump.com/Content/doublepump/img/tournaments/2.gif',
      pumpersTournaments:[3,4],
      local:2
    }
  ]
});

export default Tournament;
