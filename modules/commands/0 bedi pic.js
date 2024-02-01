/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "bedi-pic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Md jahid hasan Rajib",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Random Image",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["°\n\n\n~তোমাকে কবুতর দিয়ে চিঠি পাঠাইলাম 🕊️🤗\n\n~ আর তুমি কবুতর টাই খেয়ে দিলা 🥺🙂🤦‍♂️\n\n বাহ বেডি মানুষ বাহ 🐸😅\n\n\n°"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/ZR7k8wqx/1690049020031.jpg",
"https://i.postimg.cc/WbJRZ6c0/1692003896309.jpg",
"https://i.postimg.cc/MGqggCMY/1692779612779.jpg",
"https://i.postimg.cc/qv89bJRR/1692779620469.jpg",
"https://i.postimg.cc/y6G4WptV/1692779629437.jpg",
"https://i.postimg.cc/k5yP4J3Z/1692779643634.jpg",
"https://i.postimg.cc/bJNcS7qv/1692779654278.jpg",
"https://i.postimg.cc/g0pPmw58/1692779669693.jpg",
"https://i.postimg.cc/WbDVncgF/1692779675151.jpg",
"https://i.postimg.cc/5NZVKKSP/1692779679364.jpg",
"https://i.postimg.cc/3NVP6Wmy/1692779720149.jpg",
"https://i.postimg.cc/1XfkJDnh/1692779725973.jpg",
"https://i.postimg.cc/442ZVx7R/1692779776786.jpg",
"https://i.postimg.cc/KzJb9Z0L/1692779814180.jpg",




];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };