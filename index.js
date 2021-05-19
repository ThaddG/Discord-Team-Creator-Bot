const Discord = require('discord.js');
const keepAlive = require('./server.js');
const color = require('./randomColorGenerator');


const client = new Discord.Client();

client.on('ready', async () => {
  // runs when bot comes online 
  const channel = await client.channels.fetch(process.env['CHANNEL_ID']);

  console.log('The bot logged in')

  await channel.send('The Team Creator has entered the chat!')

});

// the bot replies to its command
client.on('message', async msg => {
  // format to create a group:
  // $team <TEAM NAME> : <TEAM MEMBERS> [@shazam @thadd ....]

  if (msg.content.startsWith('Baby Got Backathon')) {
    msg.reply('the true name for the hackathon');
  }

  if (msg.content.startsWith('$team')) {

    // get params
    const content = msg.content.trim().split(/(\$team|:)/gi)
    
    const teamName = content[2].trim()
    const members = content[content.length-1].split(' ').splice(1)
    
    console.log(content)
    console.log(teamName)

    // Create Role
    let createdRole = await msg.guild.roles.create({
      data: {
        name: teamName,
        color: color.randomColorGenerator()
      },
      reason: 'Dope Role',
    })
    // .then(console.log)
    .catch(console.error);

    // seperating the role from online
    createdRole.setHoist(true);

    // Create channel (assign channel a role)
    await msg.guild.channels.create(teamName, {
      type: 'text',
      permissionOverwrites: [
        {
          id: createdRole.id,
          allow: ['VIEW_CHANNEL']
        }, 
        {
          id: msg.guild.roles.everyone,
          deny: ['VIEW_CHANNEL']
        },
      ]
    })
    // .then(console.log)
    .catch(console.log)
    
    // Assign roles to members
    msg.mentions.users.map(
      user => msg.guild.member(user).roles.add(createdRole)
    );
    
    // Reply back to say finished
    msg.reply(`Team Created!\nYour team is: ${members.map(u => u)}\nHere is your channel: ${teamName}`);
  }

});

keepAlive();
client.login(process.env['TOKEN']);