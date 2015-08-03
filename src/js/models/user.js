let User = Backbone.Model.extend({
  url: 'http://tiy-twitter.herokuapp.com/user/sign_in',

  defaults: {
    email: ''
  },
  login: function(credentials) {
    $.ajax('http://tiy-twitter.herokuapp.com/user/sign_in')
      .done(this.loginSuccess.bind(this))
      .fail(this.loginSuccess.bind(this));
  },

  loginSuccess: function(data) {
    var data = {
      email: ''
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
