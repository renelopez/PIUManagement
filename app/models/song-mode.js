import DS from 'ember-data';

var SongMode= DS.Model.extend({
  song:DS.belongsTo('song'),
  mode:DS.belongsTo('mode'),
  difficulty:DS.attr('number'),
  score:DS.attr('number'),
  grade:DS.attr('string')
});

SongMode.reopenClass({
  FIXTURES:[
    {
      id:1,
      song:1,
      mode:1,
      difficulty:20,
      score:29293921,
      grade:'A'
    },
    {
      id:2,
      song:1,
      mode:2,
      difficulty:12,
      score:2932321,
      grade:'B'
    },
    {
      id:3,
      song:1,
      mode:3,
      difficulty:12,
      score:2921,
      grade:'C'
    },
    {
      id:4,
      song:1,
      mode:4,
      difficulty:2,
      score:21,
      grade:'D'
    }
  ]
});

export default SongMode;
