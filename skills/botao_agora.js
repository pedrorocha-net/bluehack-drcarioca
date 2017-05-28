/**
 * Created by oliviaws on 27/05/2017.
 */
module.exports = function(controller) {

    controller.hears('teste', 'message_received', function(bot, message) {

        var botaoAgora = {
            'type':'template',
            'payload':{
                'template_type':'button',
                'text' : 'OPA!',
                'buttons':[
                    {
                        'type':'postback',
                        'title':'Quero marcar agora',
                        'payload':'AGORA'
                    }
                ]
            }
        };

        bot.reply(message, {
            attachment: botaoAgora,
        });

        bot.reply(message, 'Se preferir, você pode também digitar a data no formato: dia/mês.');


        bot.reply(message, 'Certo. :)\n' + 'Quando você pretende comparecer à unidade?');

        //AINDA PRECISO AJEITAR A ORDEM DISSO!

    });

};
