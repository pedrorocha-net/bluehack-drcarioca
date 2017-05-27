var env = require('node-env-file');
env(__dirname + '/.env');

if (!process.env.page_token) {
  console.log('Error: Specify a Facebook page_token in environment.');
  process.exit(1);
}

if (!process.env.verify_token) {
  console.log('Error: Specify a Facebook verify_token in environment.');
  process.exit(1);
}

var Botkit = require('botkit');
var debug = require('debug')('botkit:main');
var os = require('os');

var page_token;

if (os.hostname().indexOf("local") > -1) {
  page_token = process.env.page_token_dev1;
} else {
  page_token = process.env.page_token;
}

var controller = Botkit.facebookbot({
  // debug: true,
  receive_via_postback: true,
  verify_token: process.env.verify_token,
  access_token: page_token
});

// Set up an Express-powered webserver to expose oauth and webhook endpoints
var webserver = require(__dirname + '/components/express_webserver.js')(controller);

// Tell Facebook to start sending events to this application
require(__dirname + '/components/subscribe_events.js')(controller);

// Set up Facebook "thread settings" such as get started button, persistent menu
require(__dirname + '/components/thread_settings.js')(controller);


// Send an onboarding message when a user activates the bot
require(__dirname + '/components/onboarding.js')(controller);

// Enable Dashbot.io plugin
require(__dirname + '/components/plugin_dashbot.js')(controller);

var normalizedPath = require("path").join(__dirname, "skills");
require("fs").readdirSync(normalizedPath).forEach(function (file) {
  require("./skills/" + file)(controller);
});