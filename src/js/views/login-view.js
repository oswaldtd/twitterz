var LoginView = Backbone.View.extend({
  template: _.template($('#loginView').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  },


});

export default LoginView;
