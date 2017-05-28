module.exports = function(controller) {

    controller.on('facebook_postback', function(bot, message) {

        if(message.payload =='dr_carioca_start'){

            bot.reply(message, "Legal, qual o tipo de atendimento você procura ou escreva o que você está sentindo. " +
                "Por exemplo 'torci o tornozelo' ou 'consultar um cardiologista");

        }
    });

};

// module.exports = function(controller) {
//     controller.on('message_delivered', function(bot, message){
//
//       if(message.hasOwnProperty('greeting')){
//             bot.reply(message, "Habemus greetings!");
//       };
//
//
//       }
//   );
//
// };
