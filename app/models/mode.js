import DS from 'ember-data';

var Mode = DS.Model.extend({
  name:DS.attr('string')
});

Mode.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'Single'
    },
    {
      id:2,
      name:'Double'
    },
    {
      id:3,
      name:'Single Performance'
    },
    {
      id:4,
      name:'Double Performance'
    },
    {
      id:5,
      name:'Triple Performance'
    }
  ]
});

export default Mode;
