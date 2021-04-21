const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('798574936988844033') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **OneWoo Bot Yardım Menüsüne Hoşgeldiniz** `)
        .setDescription(`
 
  **<a:yanok:834402207050498058> ${prefix}erkek-role [@rolEtiket]**
  **<a:yanok:834402207050498058> ${prefix}kadın-role [@rolEtiket]**
  **<a:yanok:834402207050498058> ${prefix}yetkili-role [@rolEtiket]**
  **<a:yanok:834402207050498058> ${prefix}!kayıtsız-role [@rolEtiket]**
 
  \`\`    [ Nasıl Kullanılır ]  \`\`
  
  **<a:yanok:834402207050498058>  ${prefix}e**
  **<a:yanok:834402207050498058>  ${prefix}k**
  
   \`\`    [ Kapatma Komutları ]  \`\` 
   
  **<a:yanok:834402207050498058>  ${prefix}erkek-sil** 
  **<a:yanok:834402207050498058> ${prefix}kadın-sil** 
  **<a:yanok:834402207050498058> ${prefix}yetkili-sil**  
  **<a:yanok:834402207050498058> ${prefix}kayıtsız-sil** 
`)
        .setImage(`https://cdn.discordapp.com/attachments/725317564074557490/811627276822511646/standard_2.gif`)
        .addField(`» OneWoo Bot Bağlantıları`, ` :dash:  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=798574936988844033&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/Ts4twkEDhW) :dash: `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıtyardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};