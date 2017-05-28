/**
 * Created by oliviaws on 28/05/2017.
 */
module.exports = function (controller) {
  controller.hears('(.*)', 'message_received', function (bot, message) {
    bot.reply(message, message.watsonData.output.text.join('\n'));
  });


  hears(['.*'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    controller.log('FB bot message received');
    middleware.interpret(bot, message, function (err) {
      if (!err)
        bot.reply(message, message.watsonData.output.text.join('\n'));
    });
  });


};