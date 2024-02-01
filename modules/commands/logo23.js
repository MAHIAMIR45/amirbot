const API = "https://api.zahwazein.xyz/textpro/halloween?apikey=zenzkey_bcf016ac29&text="
module.exports.config = {
	name: "logo23",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
	description: "Textpro logo make using bot",
	commandCategory: "text maker",
	usages: "logo23 [text]",
	cooldowns: 5
};
module.exports.run = async function ({ api, event, args,}) {
if (this.config.credits != "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗") {
        console.log("[ WARNING ] » Change credited Fuck You By 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 :p  :) "+ global.config.BOTNAME + ' credits modules "' + this.config.name + '"');
        return api.sendMessage("× [ WARNING ] × LOL CREDIT CHANGED FUCK YOUR SISTER BY 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 😹🖐🏻" , event.threadID, event.messageID);
}
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("ᶜ🍂ᵗ 𝐏𝐋𝐄𝐀𝐒𝐄 ❺ 𝐒𝐄𝐂𝐎𝐍𝐃𝐒 𝐖𝐀𝐈𝐓 ᶜ🍂ᵗ", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: "ᶜ🌝ᵗ   𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄  ᶜ🌝ᵗ", attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`error ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};