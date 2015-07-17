import DS from 'ember-data';

var Song= DS.Model.extend({
  name:DS.attr('string'),
  author:DS.attr('string'),
  genre:DS.attr('string'),
  BPM:DS.attr('number'),
  songModes:DS.hasMany('songMode',{async:true})
});

Song.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'I will give you all my love',
      author:'WAX',
      genre:'K-POP',
      BPM:160,
      songModes:[1,2,3,4]
    },
    {
      id:2,
      name:'Dignity',
      author:'Crash',
      genre:'K-POP',
      BPM:190
    },{
      id:3,
      name:'Slam',
      author:'Novasonic',
      genre:'K-POP',
      BPM:140
    }

  ]
});

export default Song;
