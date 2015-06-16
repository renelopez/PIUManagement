import DS from 'ember-data';

var Pumper= DS.Model.extend({
  name:DS.attr('string'),
  lastName:DS.attr('string'),
  nickName:DS.attr('string,'),
  email:DS.attr('string'),
  phone:DS.attr('string'),
  birthDate:DS.attr('date'),
  caloriesBurned:DS.attr('number'),
  debutDate:DS.attr('date'),
  photoUrl:DS.attr('string'),
  addresses:DS.hasMany('address',{async:true}),
  locals:DS.hasMany('local',{async:true}),
  categories:DS.hasMany('category',{async:true}),
  songs:DS.hasMany('song',{async :true}),
  zone:DS.belongsTo('zone',{async:true})
});

Pumper.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'Rene',
      lastName:'Lopez',
      nickName:'Renex',
      email:'rene.cano@hotmail.com',
      phone:'360321212',
      birthDate:'24/04/1988',
      caloriesBurned:20,
      debutDate:'12/12/2006',
      photoUrl:'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200',
      addresses:[1],
      locals:[1],
      categories:[1,3],
      zone:1,
      songs:[1]
    },
    {
      id:2,
      name:'Mario',
      lastName:'Rodriguez',
      nickName:'Hou',
      email:'mario.rodriguez@hotmail.com',
      phone:'360321212',
      birthDate:'12/04/1989',
      caloriesBurned:23432,
      debutDate:'12/12/1992',
      photoUrl:'http://www.iclarified.com/images/news/38136/164976/164976.png',
      addresses:[2],
      locals:[1],
      categories:[1],
      zone:1,
      songs:[1,2]
    },
    {
      id:3,
      name:'Gerardo',
      lastName:'Perez',
      nickName:'Gerber',
      email:'gerber.perez@hotmail.com',
      phone:'360321212',
      birthDate:'12/04/1994',
      caloriesBurned:23432,
      debutDate:'12/12/2010',
      photoUrl:'http://static.comicvine.com/uploads/original/5/53282/1287026-showcase_ember_0026.jpg',
      addresses:[3],
      locals:[1],
      categories:[1],
      zone:1,
      songs:[1,3]
    },{
      id:4,
      name:'Nayeli',
      lastName:'Garcia',
      nickName:'Naye',
      email:'nayeli.garcia@hotmail.com',
      phone:'360321212',
      birthDate:'12/04/1989',
      caloriesBurned:23432,
      debutDate:'12/12/1990',
      photoUrl:'http://a1849.phobos.apple.com/us/r30/Purple/v4/05/90/6b/05906b08-c2f0-29c8-f75a-4f61706e0fee/mzl.eampfryt.png',
      addresses:[4],
      locals:[1],
      categories:[2],
      zone:1
    },
    {
      id:5,
      name:'Carlos',
      lastName:'Lopez',
      nickName:'xxxy',
      email:'carlos.lopez@hotmail.com',
      phone:'360321212',
      birthDate:'12/04/1992',
      caloriesBurned:23432,
      debutDate:'12/12/1990',
      photoUrl:'http://emberjs.com/images/logos/ember-logo.png',
      addresses:[5],
      locals:[1,2],
      categories:[1],
      zone:1
    }
  ]
});

export default Pumper;

