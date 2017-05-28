/**
 * Created by oliviaws on 27/05/2017.
 */
module.exports = function(controller) {

    controller.hears('problema', 'message_received', function(bot, message) {

        //passa o que o usuário disser pelo API.AI e grava no banco de dados enquanto dá a resposta

        var botaoAgora = {
            'type':'template',
            'payload':{
                'template_type':'button',
                'text' : 'Entendi.\nQuando você pretende comparecer à unidade?',
                'buttons':[
                    {
                        'type':'postback',
                        'title':'Vou agora.',
                        'payload':'agora'
                    }
                ]
            }
        };
        //
        bot.startConversation(message, function(err, convo){

            convo.addMessage({
                text: 'Muito bem! Saúde em primeiro lugar!',
            },'hoje_thread');

            convo.ask('Entendi.\nQuando você pretende comparecer à unidade de atendimento?',
                [
                    {
                        pattern: bot.utterances.hoje = 'hoje',
                        callback: function (response, convo) {
                            convo.gotoThread('hoje_thread');
                        }
                    }
                        ]

            );
            // convo.addMessage({
            //     text: 'How wonderful.',
            // },'yes_thread');
            convo.activate();
        });

    });

};


// bot.reply(message, {
//     attachment: botaoAgora,
// });

