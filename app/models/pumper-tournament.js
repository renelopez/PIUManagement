import DS from 'ember-data';

var PumperTournament =DS.Model.extend({
  place:DS.attr('number'),
  pumper:DS.belongsTo('pumper',{async:true}),
  tournament:DS.belongsTo('tournament',{async:true})
});

PumperTournament.reopenClass({
  FIXTURES:[
    {

    }
  ]
});


export default PumperTournament;
