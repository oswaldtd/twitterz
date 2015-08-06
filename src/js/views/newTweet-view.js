import User from '../models/user';
import Tweet from '../models/tweet';

let html =
`
<a href="#/feed">Feed</a>
<textarea placeholder ="What's on your mind?"></textarea>
<button type="button">Tweet</button>
`;

let NewTweet = Backbone.View.extend({
  template: _.template(html),

  className: 'tweet',

  events: {
    'focus textarea': 'toggleInput',
    'click button': 'onSubmit'
  },

  toggleInput() {
   this.$('button').fadeIn();
 },
 
  onSubmit() {
  var $input = this.$('textarea');
  var body = $input.val();

  if (User.isLoggedIn() && body) {
    this.collection.add({
      user: User.get('id'),
      body: body
    });

    $input.val('');
  }
},

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default NewTweet;
