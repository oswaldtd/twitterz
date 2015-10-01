#Twitterz
Group project at the Iron Yard. 3 front-end students and 1 back-end student created a Twitter clone.
We used Backbone.js to create the structure of the application and hooked into the RESTful api created by the ruby student.
DEMO
http://awilli1186.github.io/twitter-clone/
Installation

#npm install
This will install the node dependencies for you, and will also install any bower components.
This will also run the gulp build process to create the dist folder.
Listening for file changes:

If you have any scss or js files that you want to automatically transpile, then run the command: gulp watch

#Build and watch

If you would like to build the dist/ folder and then watch for file changes, then run the command: gulp

This will run:

watch
lint
babel
sass
Lint (JSCS) our Javascript

If you want to validate your Javascript code and it's style against the AirBnb style guide, then run the command: gulp lint

#Compile SASS

If you want to compile your SASS (.scss files), then run the command: gulp sass

Transpile ES6 code to ES5

If you want to compile your ES6/ES7 (ES2015/17) Javascript code to ES5 to use new Javascript features now before the browser supports them, then run this command: gulp babel
