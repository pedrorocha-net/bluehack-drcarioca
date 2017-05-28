/**
 * Created by oliviaws on 28/05/2017.
 */

module.exports = function(controller) {
    controller.hears(['Obrigado!'], 'message_received', function(bot, message){

        bot.reply(message, 'Obrigado a você por se consultar com o Dr Carioca!');

        bot.replyWithTyping(message, 'Sempre que precisar, pode vir falar comigo! ;)');

        }

    );
}