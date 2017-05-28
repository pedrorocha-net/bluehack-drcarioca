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
                        }

                    });

                    if (!enviouText && message.watsonData.output.text.length > 0) {
                        bot.reply(message, message.watsonData.output.text.join('\n'));
                    }

                }
            }
        );

    });

    controller.on('message_received', function (bot, message) {
        console.log('RECEBI O POSTBACK');
        if(message.attachments[0].type === 'location') {
            console.log(message.attachments[0].payload.coordinates.lat);
            console.log(message.attachments[0].payload.coordinates.long);

            require('request')({url: 'http://dev-dr-carioca.pantheonsite.io/api/unidades', json: true}, function(err, res, json) {
                if (err) {
                    throw err;
                }
                console.log(json);
            });
        }
    });

}





