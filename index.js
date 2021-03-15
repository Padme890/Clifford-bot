const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./commands.js')
const firstMessage = require('./first-message.js')

client.on('ready', () => {
    console.log('The client is ready')

    firstMessage(client, '808421012831862804', 'Lets put something else here to confuse dab', ['👍'])

    command(client, ['ping', 'test'], message => {
        message.channel.send('Pong!')
    })
})
command(client, 'pong', message => {
    message.channel.send('Ping!')
})
command(client, 'watermelon', message => {
    message.react('🍉')
})
command(client, 'servers', message => {
    client.guilds.cache.forEach(guild => {
        message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
    })
})
command(client, 'avatar', message => {
    message.reply(message.author.displayAvatarURL());
})
command(client, 'invite', message => {
    message.channel.send('<https://discord.com/api/oauth2/authorize?client_id=796965898678042634&permissions=0&scope=bot>')
})
command(client, ['cc', 'clearchannel', 'clearchat'], message => {
    if (message.member.hasPermission('ADMINISTRATOR'))
    message.channel.messages.fetch().then(results => {
        message.channel.bulkDelete(results)
    })
})
command(client, 'status', (message) => {
    const content = message.content.replace('.status ', '')
    if (message.member.hasPermission('ADMINISTRATOR'))
    client.user.setPresence({
      activity: {
        name: content,
        type: 2,
      },
    })
  }) 

  command(client, ['gay', 'gae', 'trans', 'lgbtq'], message => {
      message.channel.send('is bad')
  });

command(client, 'ctc', (message) => {
    const name = message.content.replace('.ctc ', '')
    if (message.member.hasPermission('MANAGE_CHANNELS'))
    message.guild.channels.create(name, {
        type: 'text'
    }).then(channel => {
        console.log(channel)
    })
})

client.login(config.token)