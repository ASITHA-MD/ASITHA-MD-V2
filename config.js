
const envv2 = require('./config-db')
var GITHUB_AUTH_TOKEN;
var GITHUB_USERNAME;
var SESSION_ID;𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=WjBRnZYY#-xk9Dc2EUE3fRvsoRZ8x0Gha_NITmqRDSXP8-dl112E

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN
} else {
GITHUB_AUTH_TOKEN = envv2.GITHUB_AUTH_TOKEN
}

if(process.env.GITHUB_USERNAME){
GITHUB_USERNAME = process.env.GITHUB_USERNAME
} else {
GITHUB_USERNAME = envv2.GITHUB_USERNAME
}


if(process.env.SESSION_ID){𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=WjBRnZYY#-xk9Dc2EUE3fRvsoRZ8x0Gha_NITmqRDSXP8-dl112E
SESSION_ID = process.env.SESSION_ID
} else {𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=WjBRnZYY#-xk9Dc2EUE3fRvsoRZ8x0Gha_NITmqRDSXP8-dl112E
SESSION_ID = envv2.SESSION_ID
}

module.exports = {
SESSION_ID,
GITHUB_USERNAME,
GITHUB_AUTH_TOKEN
};
