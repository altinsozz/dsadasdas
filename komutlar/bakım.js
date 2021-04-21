const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
if (!message.author.id == "627543270985170958") return message.reply('')
let CodeWork = db.fetch(`CodeWork.botbakim`)
if(CodeWork) {
message.channel.send(`<a:yanok:834402207050498058> Bot başarıyla bakım modundan çıkarıldı.`)
db.delete(`CodeWork.botbakim`)
};

if(!CodeWork) {
message.channel.send(`<a:yanok:834402207050498058> Botu başarıyla bakıma aldınız, bakımdan çıkarmak için aynı mesaj yazınız.`)
db.set(`CodeWork.botbakim`, 'aktif')
}};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['bakim'],
permLevel: 4
};

exports.help = {
name: 'bakım',
description: 'Botu bakıma alırsınız.',
usage: 'bakım'
};