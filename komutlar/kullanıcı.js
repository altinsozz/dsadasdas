const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 

exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`**OneWoo Bot  Kullanıcı Menüsüne Hoşgeldiniz**`)
        .setDescription(`
  **»<:NormalEmojiM3L1H243:825007252750467072> ${prefix}yenikomutlar**  Yeni Komutları Gösterir. <:NormalEmojiM3L1H243:825007252750467072>
  **»<a:yanok:834402207050498058>  ${prefix}avatar**  \`Avatarınızı Atar.\`
  **»<a:yanok:834402207050498058>  ${prefix}sunucutanıt** \` Sunucunuzu Tanıtır.\`
  **»<a:yanok:834402207050498058>  ${prefix}kullanıcı-bilgi** \` Etiketlediğiniz Kişinin Kullanıcı Bilgisini Gösterir.\`
  **»<a:yanok:834402207050498058>  ${prefix}kanalbilgi **  \`Belirtilen Kanal Hakkında Bilgi Verir.\`
  **»<a:yanok:834402207050498058>  ${prefix}davet** \` Botu Davet Edersiniz!\`
  **»<a:yanok:834402207050498058>  ${prefix}korona ** \` Korona Hakkında Bilgi Alırsınız.\`
  **»<a:yanok:834402207050498058>  ${prefix}say** \` Sunucuda ki Üye Durumlarını Gösterir.\`
  **»<a:yanok:834402207050498058>  ${prefix}sunucu-bilgi**  \`Sunucu Hakkın da Bilgi Verir.\`
  **»<a:yanok:834402207050498058>  ${prefix}sunucu-resim** \` Sunucununsİconunu Atar.\`
  **»<a:yanok:834402207050498058>  ${prefix}yetkilerim**  \`Sunucuda ki Yetkilerinizi Gösterir.\`
  **» <a:yanok:834402207050498058> ${prefix}toplamkomut** \` Botta Kac Komut Oldugunu Gösterir.\`
    **»<a:yanok:834402207050498058>  ${prefix}afk** \`Afk Olursunuz.\`
`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
        .addField(`» OneWoo Bot Bağlantıları`, ` :dash:  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=798574936988844033&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/Ts4twkEDhW) :dash: `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kullanıcı'
};