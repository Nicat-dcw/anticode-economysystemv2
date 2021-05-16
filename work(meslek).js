const CurrencySystem = require("currency-system");
exports.run = async(client, message, args) => {

    const cs = new CurrencySystem;
    let result = await cs.work({
        user: message.author,
        guild: message.guild,
        maxAmount: 1000,//The max amount of moneyy you get when you work.
        replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic'],
        cooldown: 25 //25 seconds,

    });

    message.channel.send(result);
} 
exports.help = {
name: 'work' 
} 
