let FeedView = Backbone.View.extend({
  template: _.template($('#feedView').html()),


  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }


});

export default FeedView;
