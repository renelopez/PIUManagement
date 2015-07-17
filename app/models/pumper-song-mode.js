import DS from 'ember-data';

var PumperSongMode = DS.Model.extend({
  pumper:DS.belongsTo('pumper',{async:true}),
  songMode:DS.belongsTo('songMode',{async:true}),
  score:DS.attr('number'),
  grade:DS.attr('string')
});

PumperSongMode.reopenClass({
  FIXTURES:[
    {
      id:1,
      pumper:1,
      songMode:1,
      score:1243412,
      grade:'A'
    },
    {
      id:2,
      pumper:1,
      songMode:2,
      score:32431,
      grade:'B'
    },
    {
      id:3,
      pumper:1,
      songMode:3,
      score:3254534,
      grade:'B'
    }
  ]
});

export default PumperSongMode;
