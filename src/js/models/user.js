let User = Backbone.Model.extend({
  url: 'http://tiy-twitter.herokuapp.com/users',

  defaults: {
    email: ''
  },

  register: function(credentials) {
    $.ajax('http://tiy-twitter.herokuapp.com/users', {
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify({
        user: credentials
      })
    })
      .done(this.registerSuccess.bind(this))
      .fail(this.registerFail.bind(this));
  },

  login: function(credentials) {
    $.ajax('http://tiy-twitter.herokuapp.com/users/sign_in', {
      data: credentials
    })
      .done(this.loginSuccess.bind(this))
      .fail(this.loginFail.bind(this));
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
  },

  registerSuccess: function(data) {
    console.log('success!', data);
  },

  registerFail: function(jqXHR, textStatus, errorThrown) {
    console.log('error!', errorThrown);
  }
});


export default new User();
