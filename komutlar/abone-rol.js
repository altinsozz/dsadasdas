let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<:nooo:834402193351114772> Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`<:nooo:834402193351114772> **Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonerol @rol__**`)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`<:Partner1:834402241208909835> **Abone rolü başarıyla "${rol}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: '!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}