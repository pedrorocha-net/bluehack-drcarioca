module.exports = function(controller) {

    controller.on('facebook_postback', function(bot, message) {

        if(message.payload =='dr_carioca_start'){

            bot.reply(message, "Vamos começar! Vou te ajudar a conseguir todas as informações necessárias!");

        }
    });

};



