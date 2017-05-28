module.exports = function (controller, middleware) {

  controller.hears(['.*'], ['message_received', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {

    middleware.interpret(bot, message, function (err) {
        if (!err) {

          var intents = message.watsonData.intents;
          var entities = message.watsonData.entities;

          console.log('INICIAR WATSON process');

          var enviouText = false;

          entities.forEach(function (entity_item) {
            if (
              entity_item.entity == 'RespostaObjetivo'
              && entity_item.value == 'sim'
            ) {
              console.log('PEDIR = local');
              var local = {
                "text": message.watsonData.output.text.join('\n'),
                "quick_replies": [
                  {
                    "title": "minha localizacao",
                    "content_type": "location",
                    "payload": "SEND_LOCATION"
                  }
                ]
              };

              enviouText = true;

              bot.reply(message, local);


              var unidade = {
                "title": 'Titulo',
                "image": {
                  "src": 'https://dev-dr-carioca.pantheonsite.io/sites/default/files/upa_madureira.jpg'
                },
                "rua": 'Rua',
                "neighbourhood": 'Bairro'
              };

              var unidades = {
                "attachment": {
                  "type": "template",
                  "payload": {
                    "template_type": "generic",
                    "elements": [
                      {
                        "title": unidade.title,
                        "image_url": unidade.image.src,
                        "subtitle": unidade.rua + unidade.neighbourhood,
                        "default_action": {
                          "type": "web_url",
                          "url": "http://dev-dr-carioca.pantheonsite.io/",
                          "messenger_extensions": true,
                          "webview_height_ratio": "tall",
                          "fallback_url": "http://dev-dr-carioca.pantheonsite.io/"
                        },
                        "buttons": [
                          {
                            "type": "web_url",
                            "url": "http://dev-dr-carioca.pantheonsite.io/",
                            "title": "Ver direções"
                          }
                        ]
                      }
                    ]
                  }
                }
              };

              bot.reply(message, unidades);
            }

          });

          if (!enviouText && message.watsonData.output.text.length > 0) {
            bot.reply(message, message.watsonData.output.text.join('\n'));
          }

        }
      }
    );

  });

  controller.on('facebook_postback', function (bot, message) {
    console.log('RECEIVED POSTBACK');
    // console.log(bot);
    // console.log(message);
    console.log(111);
    if (message.payload == 'chocolate') {
      bot.reply(message, 'You ate the chocolate cookie!')
    }

  });

  // controller.on('facebook_postback', function (response, b) {
  //
  //   // var imagem_ret = {
  //   //   "attachment": {
  //   //     "type": "template",
  //   //     "payload": {
  //   //       "template_type": "generic",
  //   //       "elements": {
  //   //         "element": {
  //   //           "title": "Your current location",
  //   //           "image_url": "https:\/\/maps.googleapis.com\/maps\/api\/staticmap?size=764x400&center=" + lat + "," + long + "&zoom=25&markers=" + lat + "," + long,
  //   //           "item_url": "http:\/\/maps.apple.com\/maps?q=" + lat + "," + long + "&z=16"
  //   //         }
  //   //       }
  //   //     }
  //   //   }
  //   // };
  //
  // });

};