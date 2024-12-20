const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gamble')
		.setDescription('Go gambling!'),
	async execute(interaction) {
		const gambleResult = Math.floor(Math.random() * 100) + 1;
		await interaction.reply(`<@${interaction.user.id}> gambled and got: ${gambleResult} out of 100!`);
	},
};
