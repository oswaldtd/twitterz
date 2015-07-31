var UsersView = Backbone.View.extend({
  template: _.template($('#usersView').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  },


});

export default UsersView;
