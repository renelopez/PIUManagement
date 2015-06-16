import DS from 'ember-data';

var PumperTournament =DS.Model.extend({
  place:DS.attr('number'),
  pumper:DS.belongsTo('pumper',{async:true}),
  tournament:DS.belongsTo('tournament',{async:true})
});

PumperTournament.reopenClass({
  FIXTURES:[
    {
        id:1,
        place:1,
        pumper:1,
        tournament:1
    },
    {
      id:2,
      place:2,
      pumper:2,
      tournament:1
    },
    {
      id:3,
      place:1,
      pumper:2,
      tournament:2
    },
    {
      id:4,
      place:2,
      pumper:1,
      tournament:2
    }
  ]
});


export default PumperTournament;
