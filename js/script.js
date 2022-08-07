/*
const profile_picture = document.getElementById("profile-picture");

profile_picture.src = "images/purplik.png";

profile_picture.addEventListener('mouseover', () => {
      profile_picture.src = "images/purplik.gif";
});

profile_picture.addEventListener('mouseout', () => {
      profile_picture.src = "images/purplik.png";
});
*/

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Definitely not an IP Grabber`,
      "description": `I swear`,
      "color": 0x7307bb,
      "url": `https://purplikdev.github.io`
    }
  ]
});