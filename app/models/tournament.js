import DS from 'ember-data';

var Tournament= DS.Model.extend({
  name:DS.attr('string'),
  year:DS.attr('number'),
  pumpersTournaments:DS.hasMany('pumperTournament',{async:true}),
  location:DS.belongsTo('location')

});

Tournament.reopenClass({
  FIXTURES:[
    {

    }
  ]
});

export default Tournament;
