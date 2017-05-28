module.exports = function (controller) {

  controller.on('facebook_postback', function() {
    console.log(111);
    console.log(response);
    console.log(b);
    // var imagem_ret = {
    //   "attachment": {
    //     "type": "template",
    //     "payload": {
    //       "template_type": "generic",
    //       "elements": {
    //         "element": {
    //           "title": "Your current location",
    //           "image_url": "https:\/\/maps.googleapis.com\/maps\/api\/staticmap?size=764x400&center=" + lat + "," + long + "&zoom=25&markers=" + lat + "," + long,
    //           "item_url": "http:\/\/maps.apple.com\/maps?q=" + lat + "," + long + "&z=16"
    //         }
    //       }
    //     }
    //   }
    // };

  });

  controller.hears(['local'], 'message_received', function (bot, message) {

    var local = {
      "text": "Please share your location:",
      "quick_replies": [
        {
          "title": "titulo",
          "content_type": "location",
          "payload": "SEND_LOCATION"
        }
      ]
    };
    bot.reply(message, local);

  });

};