module.exports = function (controller, middleware) {

  controller.hears(['.*'], ['message_received', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {

    middleware.interpret(bot, message, function (err) {
      console.log(message);
      if (!err)

        var intents = message.watsonData.intents;
        var entities = message.watsonData.entities;

        switch(intents) {



        }


        bot.reply(message, message.watsonData.output.text.join('\n'));
    });

  });

};