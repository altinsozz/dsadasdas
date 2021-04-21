let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<:nooo:834402193351114772> Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`<:nooo:834402193351114772> **Bir kanal etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonelog #kanal__**`)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`<:Partner1:834402241208909835> **Abone kanalı başarıyla "${log}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: 'abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}