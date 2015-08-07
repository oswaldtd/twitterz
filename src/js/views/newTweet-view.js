import Tweet from '../models/tweet';
import Router from '../routers/router';
import Feed from '../collections/feed';

let html =
`
<a href="#/feed"><i class="fa fa-rss"></i> Feed</a>
<textarea placeholder ="What's on your mind?"></textarea>
<button type="button">Tweet</button>
`;

let NewTweet = Backbone.View.extend({
  template: _.template(html),

  className: 'tweet',

  events: {
    'click button': 'onSubmit'
  },

  onSubmit() {
  var $input = this.$('textarea');
  var body = $input.val();
  console.log(body);

  if (body) {

     this.model.newTweet({
       data: {
         body: body,
       }
    }, this);

    Router.navigate('feed', {trigger: true});
  }
},


  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default NewTweet;
