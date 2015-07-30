let User = Backbone.Model.extend({

  url: 'http://localhost/users/new',

  defaults: {
    email: ''
  }
});


export default User;
