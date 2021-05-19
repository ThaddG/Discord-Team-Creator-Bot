# WSU-Nexus-2021-Team-Creator-Bot
This bot creates a team (text channel and role) in discord.

## Contributors
- [Killaskt](https://github.com/Killaskt)

## Installation:
Registering Discord Bot:
- Go to https://discord.com/developers/applications
- Log into Discord on that site
- Create New Application via `New Application` Button
- Create new bot under `Bot Tab`
- set preferred permissions 
- Copy URL and paste in new tab to invite to a desired server
- go to `Bot Tab` and copy Bot Token

Not using Repl
- Run `git clone https://github.com/ThaddG/Discord-Team-Creator-Bot.git` in a CMD and Terminal
- Change secret keys accordingly

use REPL
- create new Node or JavaScript REPL
- Go to `Version Control` Tab
- Click on `existing repositories`
- paste `https://github.com/ThaddG/Discord-Team-Creator-Bot.git`

Uptime Robot
- grab server URL
- Add a monitor
1. Montior type: HTTPS
2. Friendly name: `<some-name>`
3. URL: paste URL

## Environment Variables
- Token: Bot Token retrieved in last step of Registering Discord bot
- CHANNEL_ID: (Must be in Discord Developer mode) right click channel and click `Copy ID` 

## Usage: 
`$team <TEAM-NAME> : <TEAM-MEMBERS>`
  - ex. `$team jello : @person1 @person2`

## Dependencies
- [Discord.js](https://discord.js.org/#/)
- [Express.js](https://expressjs.com/)
