import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

let html = `
  <h4><i class="fa fa-user"></i> <%- email %></h4>
`;
let FriendView = Backbone.View.extend({
  template: _.template(html),
  render(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});


export default FriendView;
