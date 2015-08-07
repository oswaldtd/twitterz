import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

var html =
`
  <p id='tweet'><i class="fa fa-twitter-square"></i> <%- body %></p>
`;

let TweetView = Backbone.View.extend ({

  className: 'tweet_box',
  template: _.template(html),
  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default TweetView;
