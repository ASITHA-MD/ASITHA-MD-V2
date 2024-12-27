const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=bvBWWQaZ#yiVNFdEW8bGMGEGu3Um4sF_H08CM8nKZWy0XLw_XwKw' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? "*Hello , I am alive now!!*" : process.env.ALIVE_MSG,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "false" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "false" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "true" : process.env.AUTO_STICKER,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "true" : process.env.ANTI_LINK,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "true" : process.env.ANTI_CALL,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
WELCOME_GOODBYE: process.env.WELCOME_GOODBYE === undefined ? "false" : process.env.WELCOME_GOODBYE,
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,
READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "true" : process.env.RECORDING,
AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "false" : process.env.AUTO_REACT,
NEWS_JID: process.env.NEWS_JID === undefined ? "120363333126312229@g.us" : process.env.NEWS_JID,
SEEDER_GMAIL: process.env.SEEDER_GMAIL === undefined ? "" : process.env.SEEDER_GMAIL,
SEEDER_PASSWORD: process.env.SEEDER_PASSWORD === undefined ? "" : process.env.SEEDER_PASSWORD,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,  
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
};
