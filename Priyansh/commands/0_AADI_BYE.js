//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
        name: "BYE",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "PREM BABU", 
        description: "THIS BOT IS PREM SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("BYE") ||
     react.includes("bye") || react.includes("Bye") || react.includes("𝐁𝐘𝐄") ||
react.includes("🅱🆈🅴") ||
react.includes("🄱🅈")) {
                var msg = {
                                body: `🙋  🄱🅈🄴 🄱🅈🄴 🄱🄰🄱🅄 🄼🄸🅂🅂 🅈🄾🅄 🄱🄷🅄🅃 🅂🄰🅁🄰  🙋`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }