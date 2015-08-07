let User = Backbone.Model.extend({
  url: 'http://tiy-twitter.herokuapp.com',

  defaults: {
    email: '',
  },

  register: function(credentials) {
    $.ajax('http://tiy-twitter.herokuapp.com/users', {
      method: 'POST',
      dataType: 'json',
      data: {
        user: credentials
      }
    })
      .done(this.registerSuccess.bind(this))
      .fail(this.registerFail.bind(this));
  },

  login: function(credentials) {
    $.ajax('http://tiy-twitter.herokuapp.com/oauth/token', {
      method: 'POST',
      data: {
       email: credentials.email,
       password: credentials.password,
       grant_type: 'password'
   },
    })
      .done(this.loginSuccess.bind(this))
      .fail(this.loginFail.bind(this));
  },

  users: function() {
    $.ajax('http://tiy-twitter.herokuapp.com/users', {
      method: 'GET',
      data: {
        email: attributes.email,
        followers: attributes.followers
      },
    })
    .done(this.usersSuccess.bind(this))
    .fail(this.usersFail.bind(this));
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
    var data = {
      email: ''
    };

    this.set({
      email: data.email
    });

    this.trigger('register', {success: true, user: data});
    console.log('success!', data);
  },

  registerFail: function(jqXHR, textStatus, errorThrown) {
    this.trigger('login', {success: false, error: errorThrown})
    console.log('error!', errorThrown);
  }
});


export default new User();
