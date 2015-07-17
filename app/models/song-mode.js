import DS from 'ember-data';

var SongMode= DS.Model.extend({
  song:DS.belongsTo('song',{async:true}),
  mode:DS.belongsTo('mode',{async:true}),
  pumperSongModes:DS.hasMany('pumperSongMode',{async:true}),
  difficulty:DS.attr('number')
});

SongMode.reopenClass({
  FIXTURES:[
    {
      id:1,
      song:1,
      pumperSongModes:[1],
      mode:1,
      difficulty:20
    },
    {
      id:2,
      song:1,
      mode:2,
      pumperSongModes:[2],
      difficulty:12
    },
    {
      id:3,
      song:1,
      mode:3,
      pumperSongModes:[3],
      difficulty:12
    },
    {
      id:4,
      song:1,
      mode:4,
      difficulty:2
    }
  ]
});

export default SongMode;
