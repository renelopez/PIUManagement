import DS from 'ember-data';

var Address= DS.Model.extend({
  name:DS.attr('string'),
  externalNumber:DS.attr('number'),
  internalNumber:DS.attr('number'),
  colony:DS.attr('string'),
  postalCode:DS.attr('number'),
  city:DS.attr('string'),
  state:DS.attr('string'),
  type:DS.attr('string'),
  pumper:DS.belongsTo('pumper'),
  local:DS.belongsTo('local')
});

Address.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:'Pablo Valdez',
      externalNumber:4069,
      internalNumber:25,
      colony:'Lomas del Gallo',
      postalCode:'44760',
      city:'Guadalajara',
      state:'Jalisco',
      pumper:1
    },
    {
      id:2,
      name:'Avenida Americas',
      externalNumber:1536,
      internalNumber:1,
      colony:'Country Club',
      postalCode:'44610',
      city:'Guadalajara',
      state:'Jalisco',
      pumper:2
    },
    {
      id:3,
      name:'Jardines de Versalles',
      externalNumber:3909,
      internalNumber:0,
      colony:'Jardines de San Francisco',
      postalCode:'44790',
      city:'Guadalajara',
      state:'Jalisco',
      pumper:3
    },
    {
      id:4,
      name:'Providencia',
      externalNumber:2312,
      internalNumber:0,
      colony:'Terranova',
      postalCode:'44615',
      city:'Zapopan',
      state:'Jalisco',
      pumper:4
    },
    {
      id:5,
      name:'Avenida Patria',
      externalNumber:4444,
      internalNumber:0,
      colony:'Jacarandas',
      postalCode:'44099',
      city:'Zapopan',
      state:'Jalisco',
      pumper:5
    },
    {
      id:6,
      name:'Jose Luis',
      externalNumber:68,
      internalNumber:0,
      colony:'Centro',
      postalCode:'44100',
      city:'Guadalajara',
      state:'Jalisco',
      local:1
    },
    {
      id:7,
      name:'Agustin Pagasa',
      externalNumber:4444,
      internalNumber:0,
      colony:'La Aurora',
      postalCode:'44099',
      city:'Guadalajara',
      state:'Jalisco',
      local:2
    }
  ]
});

export default Address;
