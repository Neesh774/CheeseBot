const { Client, MessageEmbed, DiscordAPIError } = require('discord.js');
client = new Client();
require('dotenv').config();
prefix = 'c';
var facts = ["Cheddar Cheese is never naturally orange.",
"Italy’s Credem Bank takes Parmesan cheese from local producers in exchange for cheap loans (charging 3-5% interest, depending on quality) & a fee ensuring the cheese matures properly (2 yrs) in the bank vault (cheese is sold if the loan defaults). Around 430,000 parmesan wheels ($200M+) are stored there.",
"The most stolen food item in the world is cheese, with 4% of all cheese being sold end up stolen.",
"President Andrew Jackson once had a block of cheddar cheese delivered to the white house that was four feet in diameter and two feet thick, weighed nearly 1400 pounds. He invited 10,000 visitors to the White House to eat it and it was gone within two hours.",
"When cheese is digested, it breaks down into an opioid. Other opioids you may know about are heroin and morphine.",
"The “holes” in Swiss cheese were, until recently, seen as a sign of imperfection and something cheese makers tried to avoid.",
"Albertville, France’s electricity is powered by Beaufort cheese. Since whey is unnecessary to make Beaufort cheese, bacteria is added to the whey. This transforms the whey into biogas. This gas is then fed through an engine which heats water to 90°C (194°F) to generate 2800 MWh/yr of electricity.",
"There’s a cheese from Sardinia with maggots in it that’s outlawed by European Union food hygiene-health regulations, however, it’s still made and sold on the black market.",
"People started dying cheese orange back in the 17th century to fool people into thinking it was higher quality.",
"Stilton blue cheese is known to frequently cause odd, vivid dreams.",
"American Cheese cannot be legally sold as “cheese” in the United States. It must instead be labeled as “cheese product,” “cheese food,” or “American Singles,” since its manufacturing process varies so significantly from that of other cheeses.",
"Philadelphia cream cheese is named after a village in upstate New York, not the famous Pennsylvania city.",
"In the 2013 American Cheese Competition, only one cheese was entered in the Dry Jack category, it came in third. The judges chose to not award first or second.",
"The crunchy bits you sometimes get inside of aged cheese are amino acid crystals.",
"Gouda accounts for over half of the world’s cheese consumption.",
"The French have a different cheese for every day of the year. Cheese experts estimate the total number of different French cheeses is around 1000.",
"The oldest known cheese was from 1615 BC in China and resembles cottage cheese.",
"Västerbottensost, a prized cheese from Sweden, can only be made in one village (Burträsk). After forensic DNA tests, multiple scientific studies and several documentaries, nobody knows why.",
"Wisconsin produces around 2.6 billion pounds of Cheese each year.",
"Kraft Singles cannot be called cheese because less than 51% of it is actually cheese.",
"The cheese was discovered by accident by ancients carrying milk in the stomach linings of animals.",
"Moose cheese costs around $420 per pound, since each milking takes two hours, and must be done in complete silence.",
"Pule cheese is the world’s most expensive cheese and it comes from the milk of Balkan donkeys from Serbia. It’s valued at $600 per pound; it’s so expensive because there are only ~100 jennies (female donkeys) that are milked for pule-making. It takes 3 gallons of milk to create 1 pound of cheese.",
"Edam Cheese never goes bad, it only hardens. This resulted in its popularity at sea and in remote places.",
"For thousands of years, the cheese was made with an enzyme found in the inner wall of the fourth stomach of baby calves, which required killing the calf before it was weaned. Today, 80%-90% of cheese in the US and Britain is made with an enzyme created in a genetically modified microorganism.",
"Sales of Wensleydale cheese strongly improved because of Wallace and Gromit, saving the cheese.",
"Cheese comes from the Latin word caseus, which has been found to mean to ferment/to sour.",
"Blue cheese, which has distinctive smells and tastes, have blue veins running through, which is caused by piercing the cheese and its crust with stainless steel needles and copper wires, to allow air into the product.",
"The Ancient Greeks credit the mythological hero Aristaeus, who discovered feta cheese, which is still widely used in Greek cuisine.",
"There are many types of cheese; Bel Paese, Bresse Bleu, Brie, Caerphilly, Camembert, Cheddar, Chesire, Cottage Cheese, Cream Cheese, Danish Blue, Demi-Sel, Derby, Dunlop, Double Gloucester, Edam, Emmenthal, Gjestost, Gorgonzola, Gouda, GruyÃ¨re, Lancashire, Leicester, Mozzarella, Parmesan, Port Salut, Roquefort, Samsoe, St. Paulin, Stilton, Tome au Raisin, and Wensleydale.",
"The US produces over 4275 tonnes of cheese a year. Germany produces 1927 tonnes, whereas France produces 1884 tonnes.",
"A seller of cheese is known as a cheesemonger.",
"It was once believed that eating cheese before bed could cause nightmares, but in fact it had health benefits.",
"People once believed the proverb that ‘the moon is made of green cheese’.",
"Collecting cheese labels is known as ‘tyrosemiophilia’.",
"25% of all U.S. cheese is made in the state of Wisconsin.",
"Certain types of cheeses are often banned in some countries due to the type and level of bacteria present in them.",
"Cheese caves are used throughout Europe by artisan manufacturers looking for the perfect temperature and humidity to age their latest creations.",
"It’s a myth that mice like cheese. They much prefer peanut butter due to the high moisture content.",
"Lactose intolerance won’t stop you eating Brie, Camembert, Cheddar, or even a little sprinkling of Parmesan.",
"Mozzarella is the most popular cheese in America, thanks to our love of this fresh cheese as a pizza cheese.",
"The famous holes or eyes in cheeses like swiss and emmentaler(and other alpine-style cheeses that are part of any basic fondue recipe) are the result of carbon dioxide made by bacteria in the cheese, forming little air pockets as the cheese hardens.",
"Cheese curds squeak because the elastic protein strands in the cheese rub against the enamel of your teeth. (That's fresh curds only – a fried cheese curd loses its squeak but gains a world of fried and breaded flavor.)",
"The world produces more cheese than coffee, tobacco, tea, and cocoa beans combined.",
"Cheese existed before written language did.",
"Some scientists believe that regularly eating Roquefort blue cheese helps people live longer.",
"A Wisconsin law used to require restaurants to serve cheese with every meal.",
"A 2005 study found that eating cheese 30 minutes before bed helps you sleep better.",
"There are about 2,000 varieties of cheese. (Thank you, cheese gods.)",
"Queen Victoria (1819—1901) was given the greatest wedding gift of all: a giant wheel of cheddar cheese that weighed over 1,000 pounds.",
"The biggest and heaviest cheese ever produced weighed 57,518 pounds, and was 32 feet long.",
"According to ancient cheese legend, blue cheese was invented when a young boy was eating a sandwich near a cave, spotted a hot babe, and abandoned his lunch to pursue her. When he returned a few days later, the sandwich was covered with mold, but he still ate it and, well, the rest is blue cheese history.",
"Cheese wheels exist for a reason: traditional European cheesemakers realized they could roll their wares around instead of trying to carry it all.",
"People who love cheese are called turophiles. (Hello, my fellow turo's!)",

];

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
    if(command === "fact"){
        var rng = Math.floor(Math.random() * facts.length);
		const cheeseEmbed = {
			color:"0xd1d93d",
			title: "Here's your cheese fact!",
			url:"https://media.tenor.co/videos/89c073728a3d4459f43234d606d01946/mp4",
			description:facts[rng],
			timestamp: new Date(),
			thumbnail:{
				url:"https://media.discordapp.net/attachments/646470157996261409/834414626791227413/hard-cheese-clipart-6.png?width=753&height=600"
			},
		}
			// .setColor('#d1d93d')
			// .setTitle("Here's your cheese fact!")
			// .setURL("https://media.tenor.co/videos/89c073728a3d4459f43234d606d01946/mp4")
			// .setDescription(facts[rng])
			// .setThumbnail("https://clipground.com/hard-cheese-clipart.html")
			// .addFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
		message.channel.send({ embed:cheeseEmbed });
    }
	else if(command === "help"){
		const infoEmbed = {
			color:"0xd1d93d",
			title: "Cheese Bot",
			description:"Use the `cfact` command to get a cheese fact!",
			timestamp: new Date(),
			thumbnail:{
				url:"https://media.discordapp.net/attachments/646470157996261409/834414626791227413/hard-cheese-clipart-6.png?width=753&height=600"
			},
		}
		message.channel.send({ embed:infoEmbed });
	}
});


client.login(process.env.DISCORD_TOKEN);