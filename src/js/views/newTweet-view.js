import Router from '../routers/router';

var NewTweet = Backbone.View.extend({
  template: _.template($('#newTweet').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  },


});

export default NewTweet;
