/**
 * Created by oliviaws on 28/05/2017.
 */
module.exportsv= function(controller) {
    controller.hears('(.*)', 'message_received', function (bot, message) {
        bot.reply(message, message.watsonData.output.text.join('\n'));
    });
};