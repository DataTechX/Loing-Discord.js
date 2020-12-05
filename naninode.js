require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.on('ready', () => console.log(`${client.user.tag} hay! your fucking baner.`)); //สถานะบอทออนไลน์

// notice the `async` keyword
client.on('message', async message => {
	if (message.content === '?U') { //ตั้งค่าข้อความที่จะพิมพ์
		
        message.react('👍').then(() => message.react('👎')); //ใส่อิโมจิตามต้องการ

		try {
     
//////////


const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id; //ใส่อิโมจิตามต้องการ
};
     const role = message.guild.roles.cache.get(''); //ไอดีบทบาท
message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] }) //60000 คือวินาที
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') { //ก็อปอิโมจิ

            message.member.roles.add(role);


            message.reply(' up.');
            message.delete();
		} else {
			        message.member.roles.remove(role);  //ลบบทบาทของสมาชิก
            message.reply(' down.');
            message.delete();
		}
	})
	.catch(collected => {
        message.delete(); //ลบข้อความ
	});


          ///////  
		} catch (error) {
			console.error('failed.'); //โชว์สถานะผิดพลาด
		}
	}
});

client.login(process.env.BOT_TOKEN);
