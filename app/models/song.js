import DS from 'ember-data';

var Song= DS.Model.extend({
  name:DS.attr('string'),
  author:DS.attr('string'),
  genre:DS.attr('string'),
  BPM:DS.attr('number'),
  mode:DS.attr('string'),
  difficulty:DS.attr('number'),
  score:DS.attr('score'),
  grade:DS.attr('grade'),
  pumpers:DS.hasMany('pumper')
});

Song.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'I will give you all my love',
      author:'WAX',
      genre:'K-POP',
      BPM:160,
      mode:'Double',
      difficulty:'17',
      score:'2023902',
      grade:'A',
      pumpers:[1,2,3]
    },
    {
      id:2,
      name:'Dignity',
      author:'Crash',
      genre:'K-POP',
      BPM:190,
      mode:'Single',
      difficulty:'17',
      score:'23223432',
      grade:'A',
      pumpers:[2]
    },{
      id:3,
      name:'Slam',
      author:'Novasonic',
      genre:'K-POP',
      BPM:140,
      mode:'Single',
      difficulty:'19',
      score:'4323423',
      grade:'A',
      pumpers:[3]
    }

  ]
});

export default Song;
