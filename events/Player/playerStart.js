const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
module.exports = (queue, track) => {

    if (!client.config.app.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `Started playing ${track.title} in ${queue.channel.name} 🎧`, iconURL: track.thumbnail})
    .setColor('#2f3136')

    const back = new ButtonBuilder()
    .setLabel('⬅️ Back')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('⏭️ Skip')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('⏯️ Resume & Pause')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('🔁 ⬅️ Loop')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const lyrics = new ButtonBuilder()
    .setLabel('ℹ️ Lyrics')
    .setCustomId(JSON.stringify({ffb: 'lyrics'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, lyrics, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })

}
