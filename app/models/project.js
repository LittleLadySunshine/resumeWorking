import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr( 'string' ),
  body: DS.attr( 'string' )

});

Project.reopenClass({
  FIXTURES: [
    {id: 1, title: "gCamp", body: "gCamp is a project that..."},
    {id: 2, title: "Listen", body: "Listen is music player that..."}
  ]
});

export default Project;
