let html = `
  <h4><%- email %></h4>
`;
let FriendView = Backbone.View.extend({
  template: _.template(html),
  render(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});


export default FriendView;
