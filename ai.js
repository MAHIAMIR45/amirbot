arseInt(threadID)) || {};
	
	if (!command) {
		const command = commands.values();
		var group = [], msg = 'Bot connected successfully prefix ${prefix'});
		}
		group.forEach(commandGroup => msg += `「 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} 」\n${commandGroup.cmds.join(', ')}\n\n`);
		
		return api.sendMessage(msg + `[ Use: "${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX}help each command above" for detailed usage! | Currently available ${commands.size} commands usable on this bot ]`, event.senderID, (err, info) =>
        setTimeout(() => {api.unsendMessage(info.messageID) } , 45000));


	}
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`Bot connected successfully prefix ${prefix}`, threadID, messageID);
const axios = require('axios');

module.exports.config = {
	name: 'ai',
	version: '1.0.0',
	hasPermssion: 0,
	credits: 'NTKhang',
	description: 'OpenAI ChatGPT',
	commandCategory: 'Ai',
	usages: 'text | img <text>',
	cooldowns: 5
};

module.exports.run = async function ({
	api, event, args
}) {
	switch (args[0]) {
		case 'img':
		case 'image': {   
			if (!args[1])
				return api.sendMessage('Vui lòng nhập nội dung', event.threadID, event.messageID);
			const response = await axios({
				url: 'https://APITHANHALIsharon.shar0n.repl.co/openai/imagecreate?apikey=ThanhAliVip_1234567890&size=1024x1024&query=' + encodeURIComponent(args.slice(1).join(' ')),
				method: 'GET'
			});
			const imageUrl = response.data.data[0].url;
			const image = await axios.get(imageUrl, {
				responseType: 'stream'
			});
			image.data.path = `image.png`;
			return api.sendMessage({
				attachment: image.data
			}, event.threadID, event.messageID);
		}
		default: {
			if (!args[0])
				return api.sendMessage('Please enter content', event.threadID, event.messageID);
			const response = await axios({
				url: 'https://APITHANHALIsharon.shar0n.repl.co/openai/chat?apikey=ThanhAliVip_1234567890&query=' + encodeURIComponent(args.join(' ')),
				method: 'GET'
			});
			const text = response.data.text;
			return api.sendMessage(text, event.threadID, event.messageID);
		}
	}
};arseInt