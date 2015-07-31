let User = Backbone.Model.extend({

  url: 'http://localhost/users/new',

  defaults: {
    email: ''
  },
  login: function(credentials) {
    $.ajax('http://localhost/login')
      .done(this.loginSuccess.bind(this))
      .fail(this.loginSuccess.bind(this));
  },

  loginSuccess: function(data) {
    var data = {
      email: 'will@theironyard.com'
    };
    
    this.set({
      email: data.email
    });

    this.trigger('login', {success: true, user: data});
  },

  loginFail: function(jqXHR, textStatus, errorThrown) {
    this.trigger('login', {success: false, error: errorThrown});
  }
});


export default new User();
