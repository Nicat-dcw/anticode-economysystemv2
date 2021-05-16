const CurrencySystem = require("currency-system");
exports.run = async(client, message, args) => {

    const cs = new CurrencySystem;
    let data = await cs.leaderboard(message.guild.id);
    // This is to get First 10 Users
    data = data.slice(0, 10);
const heh = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('Nobody Leaderboard yet!') 
    if (data.length < 1) return 
message.channel.send(heh);
    const msg = new Discord.MessageEmbed()
.setColor('AQUA') 
        .addField(`${message.guild.name} ¦ **Leaderboard**:`, data.map(key => `${(data.findIndex(i => i.guildID === key.guildID && i.userID === key.userID) + 1)}. **${client.users.cache.get(key.userID) ? client.users.cache.get(key.userID).username : "Unknown"}#${client.users.cache.get(key.userID) ? client.users.cache.get(key.userID).discriminator : "0000"}** - **${key.wallet} GC** - **${key.bank} GCC**`).join("\n"));
    message.channel.send(msg).catch();
} 
exports.help = {
name: 'leaderboard' 
} 
