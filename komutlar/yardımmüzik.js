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
       .setTitle(` **OneWoo Bot Müzik Menüsüne Hoşgeldiniz** `)
        .setDescription(`
  **» <a:yanok:834355812796989451> ${prefix}oynat**  İstediğiniz Müziği Oynatır!
  **» <a:yanok:834355812796989451> ${prefix}durdur**  Oynatılan Müziği Durdurur!
  **» <a:yanok:834355812796989451> ${prefix}geç**  Sıradaki Şarkıya Geçer!
  **» <a:yanok:834355812796989451> ${prefix}ses**  Ses Seviyesini Belirler!
  **» <a:yanok:834355812796989451> ${prefix}tekrar**  Çalan şarkı bitince tekrar çalar!
  **» <a:yanok:834355812796989451> ${prefix}kuyruk**  Sıradaki Şarkıları Gösterir!
  **» <a:yanok:834355812796989451> ${prefix}devamet **  Durdurulan Müziği Oynatır!
  **» <a:yanok:834355812796989451> ${prefix}oynatılan**  Şuan da Çalan Müziği Gösterir!
  **» <a:yanok:834355812796989451> ${prefix}ping**  Botun Pingini Gösterir!
  **» <a:yanok:834355812796989451> ${prefix}kapat**  Oynatılan Müziği Kapatır!
`)
        .setImage(`https://cdn.discordapp.com/attachments/725317564074557490/811627276822511646/standard_2.gif`)
        .addField(`» OneWoo Bot Bağlantıları`, ` :dash:  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=798574936988844033&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/Ts4twkEDhW) :dash: `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['müziksistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'müzikyardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};