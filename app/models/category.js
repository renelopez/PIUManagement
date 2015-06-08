import DS from 'ember-data';

var Category=DS.Model.extend({
  name:DS.attr('string'),
  pumpers:DS.hasMany('pumper')
});

Category.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'Male Speed',
      pumpers:[1,2,3,5]
    },
    {
      id:2,
      name:'Female Speed',
      pumpers:[2]
    },
    {
      id:3,
      name:'Freestyle',
      pumpers:[1]
    }
  ]
});

export default Category;
