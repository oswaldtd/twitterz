let FeedView = Backbone.View.extend({
  template: _.template($('#feedView').html()),


  render: function() {
    this.$el.html(this.template());
    return this;
  }


});

export default FeedView;
