const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpNTE8wVFI5S29Jd3BBZ2FVVmhReUtENFhzRU52a0xhU2FCSWRYcXRYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3BLTVFDUk9kZVIyeEJwdzdwVDNjRXhHcUUzRUhVQ1pHV3NCVUY2dDV3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RDluQi91OXhSYW05R3pqZ0xCSE9HVTFGZHozcUJmbXgwUzk2dGV4RkVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUbnVUUG9xbkFlTjdsaFlCU0pCWVBUVUEvSUZQT0dpcTROOXo4YWxScmg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVMN3VubkF1a21yQWpQZjl3NG1JV21yZVZHY21zeEs2cXlpMEJZL1dabTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJQLytDa2xWSk5qdjcxZU4waE44OWllMnB2MStxWk04MkptSWtNOUcveDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0g3aWVBTVdzVm9QSWg5UVRJVEFIT21tRE8wM1pSM2tGOHphTHVyS2tuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG1yc1B1QkFjUXdMY3o3SVo3WTlYa3REOFZkOVhIRmowZ0dpTjNwdGlITT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFcmRWcFF4RGF3Sm1Mb1NiRG9QN1JFaTRzcXAzcUhqUml5YUtJYXBnY29oVjI1TXJlcG1NU2FIVHlNNXNvSmUxSmprc0xnS082b2lESHNRUGZiRUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJzM1U3YzY2d2E4Vlg4bkhZSjJveWgzcDYvRjY4d0pJY0l4b2QrdjFhMlc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxYmhRdUZyRVFhRzZ6dnNTYUdWT1l3IiwicGhvbmVJZCI6IjEyNTUxM2ZhLWFiZTctNGE2Mi1iZmI2LTgzZTg1NmIyYzRjYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZ3VxY0pvZ3pWVzJXVlBwNjhzUittU3VZbm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkEwRDNLd1RtekhnZGJUd3lmeTRoU2lTRTljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY2VjlZSlE3IiwibWUiOnsiaWQiOiI0ODY5OTUzODYwMToxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqu8J2bhsmS1p/hjZ3JpMqIyZPwnZa+8J2bgnQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svSnNZa0JFSzM0OGJvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxXVDY2NG12QzhSbnB2OS96OTZHMU41OEVydnZkK0lKTVdNdlBHcTZCQXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlgyOGJwb294V1lpbjNtWWZrL1NmWncxSHEyMHNzOUk4em8zR0pGNksySkFvbWthZnNWSzJJZGh3Q3NSR2d2YU01YW43SkYrSE1qYitMUTE2ODVDWkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5NzVyOTNUR3FwaFhyQ0hDV3hwQ0x5UUNTQlFpWm5wSjl5c3B5OExmOGhyOVFIOTNJWG1Jd3dscTBMMTJ1cEdUL3IwY1J2eXJMdGo4aWNqN09obm5EQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ4Njk5NTM4NjAxOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMxayt1dUpyd3ZFWjZiL2Y4L2VodFRlZkJLNzczZmlDVEZqTHp4cXVnUU0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQxMTQzNjF9' : process.env.SESSION_ID,
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
WELCOME_GOODBYE: process.env.WELCOME_GOODBYE === undefined ? "true" : process.env.WELCOME_GOODBYE,
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,
READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "true" : process.env.RECORDING,
AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "true" : process.env.AUTO_REACT,
NEWS_JID: process.env.NEWS_JID === undefined ? "120363333126312229@g.us" : process.env.NEWS_JID,
SEEDER_GMAIL: process.env.SEEDER_GMAIL === undefined ? "" : process.env.SEEDER_GMAIL,
SEEDER_PASSWORD: process.env.SEEDER_PASSWORD === undefined ? "" : process.env.SEEDER_PASSWORD,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,  
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
};
