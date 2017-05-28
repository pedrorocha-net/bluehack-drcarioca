var debug = require('debug')('botkit:thread_settings');


module.exports = function (controller) {

  debug('Configuring Facebook thread settings...');
  controller.api.messenger_profile.greeting('Olá, eu sou o Dr. Carioca!');
  controller.api.messenger_profile.get_started('dr_carioca_start');

  // controller.api.messenger_profile.menu([{
  //   "locale": "default",
  //   "composer_input_disabled": true,
  //   "call_to_actions": [{
  //     "title": "My Account",
  //     "type": "nested",
  //     "call_to_actions": [{
  //       "title": "Pay Bill",
  //       "type": "postback",
  //       "payload": "PAYBILL_PAYLOAD"
  //     }, {
  //       "title": "History",
  //       "type": "postback",
  //       "payload": "HISTORY_PAYLOAD"
  //     }, {
  //       "title": "Contact Info",
  //       "type": "postback",
  //       "payload": "CONTACT_INFO_PAYLOAD"
  //     }]
  //   }, {
  //     "type": "web_url",
  //     "title": "Latest News",
  //     "url": "http://petershats.parseapp.com/hat-news",
  //     "webview_height_ratio": "full"
  //   }]
  // }, {"locale": "pt_BR", "composer_input_disabled": false}]);

}