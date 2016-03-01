var watson = require('watson-developer-cloud');
var apis = require('../config.js')(watson);


//TODO pass in bot settings as parameter
module.exports = function (botSettings, bot, botController){
    botController.on('ambient', function(bot, message) {
        if (message.type !== "message") return false;

        apis.tone_analyzer.tone({text: message.text}, function(err, tone){

            var toneCategory = tone.document_tone.tone_categories[0] ;

            var toneScores = {
                anger: toneCategory.tones[0].score,
                disgust: toneCategory.tones[1].score,
                fear: toneCategory.tones[2].score,
                joy: toneCategory.tones[3].score,
                sadness: toneCategory.tones[4].score
            }

            console.log(toneScores);

                sadness: botSettings.sadness.threshold
            };

            var dominantScore = 0;
            var dominantTone;
            for(var tone in toneScores){
                if(toneScores[tone] > dominantScore){
                    dominantTone = tone;
                    dominantScore = toneScores[tone];
                }
            }
;

            var dominantThreshold = botSettings[dominantTone].threshold;
            if(dominantScore > dominantThreshold){
                var responses = botSettings[dominantTone].responses;
                var responseIndex = Math.floor(Math.random() * responses.length);
                bot.reply(message, responses[responseIndex]);
                console.log("Dominant tone: " + dominantTone + " , Score: " + dominantScore);
            }
        });
    });

};
