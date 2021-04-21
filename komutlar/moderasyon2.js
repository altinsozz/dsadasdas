const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('798574936988844033')  
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **OneWoo Bot Moderasyon Menüsüne Hoşgeldiniz**`)
        .setDescription(`
  **»<a:yanok:834402207050498058>  ${prefix}mod-log**  Mod-Log Kanalını Belirlersiniz.
  **»<a:yanok:834402207050498058>  ${prefix}mod-log kapat**  Ayarlanan Mod-Log Kanalı Kapatılır.
  **»<a:yanok:834402207050498058>  ${prefix}oylama **  Oylama Yaparsınız
  **»<a:yanok:834402207050498058>  ${prefix}yasaklı-tag **  Yasaklı Tag Ayarlar.
  **»<a:yanok:834402207050498058>  ${prefix}otorol-ayarla**  Otorol Ayarlar.
  **»<a:yanok:834402207050498058>  ${prefix}otorolkapat**  Otorol Kapatır.
  **»<a:yanok:834402207050498058>  ${prefix}sayaç-ayarla**  Sayaç Ayarlar.
  **»<a:yanok:834402207050498058>  ${prefix}sayaç-kanal-ayarla**  Sayaç Kanal Ayarlar.
  **»<a:yanok:834402207050498058>  ${prefix}ban **  Etiketlenen Kullanıcıyı Banlar.
  **»<a:yanok:834402207050498058>  ${prefix}kick **  Etiketlenen Kullanıcıyı Kickler.
  **»<a:yanok:834402207050498058>  ${prefix}sa-as aç **  SA-AS Sistemini Açar.
  **»<a:yanok:834402207050498058>  ${prefix}sa-as kapat **  SA-AS Sistemini Kapatır.
  **»<a:yanok:834402207050498058>  ${prefix}emoji-ekle **  Emoji Ekler.
  **»<a:yanok:834402207050498058>  ${prefix}çekiliş **  Çekiliş yaparsınız.
`)
        .setImage(`https://cdn.discordapp.com/attachments/725317564074557490/811627276822511646/standard_2.gif`)
        .addField(`» OneWoo Bot Bağlantıları`, ` :dash:  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=798574936988844033&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/Ts4twkEDhW) :dash: `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon2'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon2',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};