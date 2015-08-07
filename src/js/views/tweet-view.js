var html = `

<div id="tweet">
  <p><%- body %></p>
</div>
`;

let Tweet = Backbone.View.extend ({
  template: _.template(html),
  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default Tweet;
