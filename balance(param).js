const CurrencySystem = require("currency-system");
exports.run = async(client, message, args) => {

    const cs = new CurrencySystem;
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else if (!args[0]) {
        user = message.author;
    }

    let result = await cs.balance({
        user: user,
        guild: message.guild
    });
    
message.channel.send(`💲 You Have ${result.wallet} GC in wallet and ${result.bank} GCC your bank `) 
}
exports.help = {
name: 'balance' 
} 
