// Loli is the best!!
module.exports.config = {
  name: "age",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "Check age",
  commandCategory: "Ai",
  usages: "age [DD/MM/YYYY]",
  cooldowns: 0
};

module.exports.run = async function ({ event, args, api }) {
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
  var input = args[0];
  if (!input) return api.sendMessage(`[⚜️]➜ অনুগ্রহ করে সঠিক বিন্যাস লিখুন > বয়স [জন্মের তারিখ/মাস/বছর]`,event.threadID,event.messageID);
  var cc = input.split("/");
  var ngay1 = parseInt(cc[0]);
  if (!ngay1 || isNaN(ngay1) || ngay1 > 31 || ngay1 < 1) return api.sendMessage("[⚜️]➜ অবৈধ জন্ম তারিখ!",event.threadID,event.messageID);
  var thang1 = parseInt(cc[1]);
  if (!thang1 || isNaN(thang1) || thang1 > 12 || thang1 < 1) return api.sendMessage("[⚜️]➜ জন্ম মাস অবৈধ!",event.threadID,event.messageID);
  var nam1 = parseInt(cc[2]);
  if (!nam1) return api.sendMessage("[⚜️]➜ জন্ম সাল অবৈধ!",event.threadID,event.messageID);
  const moment = require("moment-timezone");
  var hientai = moment.tz("Asia/Dhaka").format("DD/MM/YYYY HH:mm:ss");
  var concac = `${hientai}`;
  var djtme = concac.split(" ");
  var dm = djtme[0].split("/");
  var ngay2 = parseInt(dm[0]);
  var thang2 = parseInt(dm[1]);
  var nam2 = parseInt(dm[2]);
  var ngay3 = ngay2 - ngay1;
  var thang3 = thang2 - thang1;
  var nam3 = nam2 - nam1;
  var duma = djtme[1].split(":");
  var hh = parseInt(duma[0]);
  var mm = parseInt(duma[1]);
  var ss = parseInt(duma[2]);
  var nam = nam3 + Math.round(thang3/12 * 100)/100;
  var nam1 = nam3 + Math.round(thang3/12 )/100;
  var xthang = nam*12 + thang3 + ngay1/31;
  var thang = Math.round(xthang * 100)/100;
  var dcm = thang/36;
  var tuan = Math.round(thang*4 * 100)/100;
  var xngay = (xthang*31 + xthang*30)/2 - dcm*3/2 + ngay3 + hh/24;
  var wtf = (xthang*31 + xthang*30)/2 - dcm*3/2 + ngay3;
  var ngay = Math.round(xngay * 100)/100;
  var gio = Math.round((wtf*24 + hh) * 100)/100;
  var xphut = gio*60 + mm + ss/60;
  var phut = Math.round(xphut * 100)/100;
  var giay = Math.round((phut*60 + ss)* 100)/100;
  return api.sendMessage({body: `====「 𝗔𝗚𝗘 」====\n\n➜ 𝐃𝐚𝐭𝐞 𝐨𝐟 𝐛𝐢𝐫𝐭𝐡: ${input}\n➜ -𝐍𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐲𝐞𝐚𝐫𝐬 𝐞𝐥𝐚𝐩𝐬𝐞𝐝: ${nam} 𝐲𝐞𝐚𝐫𝐬 🌸\n➜ 𝐍𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐦𝐨𝐧𝐭𝐡𝐬 𝐞𝐥𝐚𝐩𝐬𝐞𝐝: ${thang} 𝐦𝐨𝐧𝐭𝐡𝐬 🌟\n➜ 𝐍𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐰𝐞𝐞𝐤𝐬 𝐞𝐥𝐚𝐩𝐬𝐞𝐝 𝐩𝐚𝐬𝐭: ${tuan} 𝐰𝐞𝐞𝐤𝐬 💝\n➜ 𝐄𝐥𝐚𝐩𝐬𝐞𝐝 𝐝𝐚𝐲𝐬: ${ngay} 𝐝𝐚𝐲𝐬 🎊\n➜ 𝐄𝐥𝐚𝐩𝐬𝐞𝐝 𝐡𝐨𝐮𝐫𝐬: ${gio} 𝐡𝐨𝐮𝐫𝐬 ⏰\n➜ 𝐄𝐥𝐚𝐩𝐬𝐞𝐝 𝐦𝐢𝐧𝐮𝐭𝐞𝐬: ${phut} 𝐦𝐢𝐧𝐮𝐭𝐞𝐬 💗\n➜ 𝐍𝐮𝐦𝐛𝐞𝐫𝐬 𝐨𝐟 𝐬𝐞𝐜𝐨𝐧𝐝𝐬 𝐞𝐥𝐚𝐩𝐬𝐞𝐝: ${giay} 𝐬𝐞𝐜𝐨𝐧𝐝𝐬 🍁\n━━━━━━━━━━━━━━━━━━\n➜ 𝐈 𝐰𝐚𝐬 𝐛𝐨𝐫𝐧 𝐮𝐧𝐭𝐢𝐥 𝐧𝐨𝐰 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 ${nam1} 𝐲𝐞𝐚𝐫 𝐨𝐥𝐝 🌐\n𝐂𝐫𝐞𝐝𝐢𝐭➡️𝐀𝐒𝐈𝐅 𝐱𝟔𝟗🥷🥀 \n━━━━━━━━━━━━━━━━━━`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID,event.messageID);
}