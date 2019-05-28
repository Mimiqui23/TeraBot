const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

const ytdl = require('ytdl-core');

const queue = new Map();

var servers = {};

client.login(process.env.TOKEN);

function play(connection, message) {
  
    var server = servers[message.guild.id];
  
    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
  
    server.queue.shift();
  
    server.dispatcher.on("end", function() { 
      if (server.queue[0]) play(connection, message);
  
      else connection.disconnect();
  
    });
  }
  
  client.on("ready", () => {
  
      console.log("Je suis prêt !");
      
  
  });
  
  client.on('message', async message => { 
  
      if(message.content === "Bonjour"){
          message.reply("Bonjour :smile: !");
          console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande Bonjour Sont id : ${message.author.id} !`);
      }
      setInterval(function(){
      var date = new Date();
      var jour = date.getDay();
      var heure = date.getHours();
      var minutes = date.getMinutes();
      console.log('Biiip')
      if(jour === 4) {
       if(heure === 20) {
        if(minutes === 30)
          client.channels.get("580478516433256458").send({embed: {
             color: 3066993,
             title: 'Example 1',
             description: 'une desc' }});
        }
    }
}, 60000);
  
      if(message.content === prefix + "help") {
        var aide_embed = new Discord.RichEmbed()
        .setColor('#FFD700')
        .setTitle(` Voici mes catégories d'aide !`)
        .setDescription(`Voici mes commandes disponibles :`)
        .setThumbnail(message.author.avatarURL)
        .addField(":tools: Modération", "Fais `*mod` pour voir mes commandes de modération !")
        .addField(":tada: Fun", "Fais `*fun` pour voir mes commandes d'animation !")
        .setFooter("© 2018 TeraCube")
        .setTimestamp()
        message.channel.send(aide_embed);
        console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *help Sont id : ${message.author.id} !`);
      }
      
      if(message.content.startsWith(prefix + "dire")){
      
             message.delete(message.author);
      
          var text = message.content.split(' ').slice(1).join(' ')
          if(!text) return message.reply('Hey salut')
          message.channel.send(text)
          console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *say Sont id : ${message.author.id} !`);
      }
      
      if (message.content.startsWith(prefix + 'ping')) {
          message.channel.sendMessage('Pong :smile: ! Ton ping est de `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
          console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *ping Sont id : ${message.author.id} !`);
      
      }
      
      if(message.content === "*ip"){
        message.reply("IP teracube.mcpe.eu Port 19144");
        console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *ip Sont id : ${message.author.id} !`);
      }
      if(message.content === "*contact"){
        message.reply("Pour nous contacter envoie un mail a l'adresse contact@teracube.hmsw.fr ");
         console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *contact Sont id : ${message.author.id} !`);
      }
      
      if (message.content.startsWith(prefix + "note")) {
	
	        message.delete(message.author);
	
	        let args = message.content.split(" ").slice(1);
	        let tte = args.join(" ")
	        if (!tte){
		          return message.reply("Merci de me poser une question")};
		          
		          var replys = [
		          "0/20",
		          "0.5/20",
		          "1/20",
              "1.5/20",
              "2/20",
              "2.5/20",
              "3/20",
              "3.5/20",
              "4/20",
              "4.5/20",
              "5/20",
              "5.5/20",
              "6/20",
              "6.5/20",
              "7/20",
              "7.5/20",
              "8/20",
              "8.5/20",
              "9/20",
              "9.5/20",
              "10/20",
              "10.5/20",
              "11/20",
              "11.5/20",
              "12/20",
              "12.5/20",
              "13/20",
              "13.5/20",
              "14/20",
              "14.5/20",
              "15/20",
              "15.5/20",
              "16/20",
              "16.5/20",
              "17/20",
              "17.5/20",
              "18/20",
              "18.5/20",
              "19/20",
              "19.5/20",
              "20/20"
              ,
		          ];
	            
	        let reponse = (replys[Math.floor(Math.random() * replys.length)])
	        
	        var bembed = new Discord.RichEmbed()
	        .setDescription("Prédiction de tes note !!")
	        .addField("Question", tte)
	        .addField("Réponse", reponse)
	        .setColor("RANDOM")
      message.channel.sendEmbed(bembed)

      }
      
      if(message.content === "*vote"){
        message.reply("Vas voter a l'adresse https://minecraftpocket-servers.com/server/67382/vote/ puis fait /vote dans le jeux pour gagné des cadeaux !");
         console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *vote Sont id : ${message.author.id} !`);
      }
	  
      if(message.content === prefix + "mod") {
        var mod_embed = new Discord.RichEmbed()
        .setColor('#FFD700')
        .setTitle(`Voici mes commandes modérations !`)
        .setThumbnail(message.author.avatarURL)
        .addField("*clear nombre", "Supprime le nombre de messages indiqué")
        .addField("*mute <@user>", "Mute l'utilisateur mentionné")
        .addField("*unmute <@user>", "Unmute l'utilisateur mentionné")
        .setFooter("© 2018 TeraCube")
        .setTimestamp()
        message.channel.send(mod_embed);
         console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *mod Sont id : ${message.author.id} !`);
      }
   
      if(message.content === prefix + "fun") {
        var fun_embed = new Discord.RichEmbed()
        .setColor('#FFD700')
        .setTitle(`Voici mes commandes amusantes !`)
        .setThumbnail(message.author.avatarURL)
        .addField("Bonjour", "Le bot répond !")
        .addField("*stats", "Le bot vous envoie des informations sur votre profil !")
        .addField("*youtuber", "Donne la liste des youtuber du serveur ! ")
        .addField("*ping", "Vous donne votre ping ")
        .addField("*info", "Donne des informations sur le bot et le serveur !")
        .addField("*contact", "Donne des informations sur le contact !")
        .addField("*ip","Donne l'ip du serveur")
        .addField("*vote","Donne le lien de vote du serveur")
	.addField("*note Note du prochain dm", "Envois une prédiction de la note de ta prochaine évaluation !")
        .setFooter("© 2018 TeraCube")
        .setTimestamp()
        message.channel.send(fun_embed);
        console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *fun Sont id : ${message.author.id} !`);
      }
      
       if(message.content === prefix + "youtuber") {
        var fun_embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle(`Voici mes commandes amusantes !`)
        .addField("🐢🐇LPBčøûćhDz69ŸT🐇🐢", `[ici pour voir sa chaine YouTube](https://www.youtube.com/channel/UCnxRq_ZcU76hFfSf6zoaWSA)`, true)
        .addField("lucas monvoisin", `[ici pour voir sa chaine YouTube](https://www.youtube.com/channel/UCd0i3x8wPntXdgzhkhI-cvg)`, true)
        .addField("Minecraft gamers yt", `[ici pour voir sa chaine YouTube](https://www.youtube.com/channel/UCt_uvQDYAWI7UlV3XhxZxlw)`, true)
        .addField("PoteDuMaroc", `[ici pour voir sa chaine YouTube](https://www.youtube.com/channel/UCD0kCEtbUmzQTOgoCeKGseA)`, true)
        .addField("🐺MoussaLeTche🐺", `[ici pour voir sa chaine YouTube](https://www.youtube.com/channel/UC0X6bhDkQedB_rgxtgnwvug)`, true)
        .setThumbnail(message.author.avatarURL)
        .setFooter("© 2018 TeraCube")
        .setTimestamp()
        message.channel.send(fun_embed);
        console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *youtuber Sont id : ${message.author.id} !`);
      }
  
      if(message.content === prefix + "info") {
          var info_embed = new Discord.RichEmbed()
          .setColor("#FFD700")
          .setTitle("Voici les informations sur moi et le serveur !")
          .addField(" :robot: Nom :", `${client.user.tag}`, true)
          .addField("Descriminateur du bot", `#${client.user.discriminator}`)
          .addField("ID ", `${client.user.id}`)
          .addField("Nombre de membres", message.guild.members.size)
          .addField("Nombre de catégories et de salons", message.guild.channels.size)
          .addField("Date de création du bot :" , "01/11/2018")
          .addField("Bot crée par :" , "Antoine2lop avec l'aide de Zips Tuto/Gaming pour l'hébergement ")
          .setFooter("© 2018 TeraCube")
          message.channel.sendMessage(info_embed)
          console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *info Sont id : ${message.author.id} !`);
      }
      
      if(message.content === prefix + "p") {
	message.delete(message.author)
        var mod_embed = new Discord.RichEmbed()
        .setColor('#808000')
        .setThumbnail(message.author.avatarURL)
        .addField("Prise de service de ", `${message.member.user.tag}`)
        .setFooter(" ")
        .setTimestamp()
        message.channel.send(mod_embed);
         console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *p Sont id : ${message.author.id} !`);
      }

      if(message.content === prefix + "f") {
	message.delete(message.author)
        var mod_embed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setThumbnail(message.author.avatarURL)
        .addField("Fin de service de    ", `${message.member.user.tag}`)
        .setFooter(" ")
        .setTimestamp()
        message.channel.send(mod_embed);
         console.log(`L'utilisateur ${message.member.user.tag} a éxécuter la commande *f Sont id : ${message.author.id} !`);
      }
  
      if(message.content.startsWith(prefix + "clear")) {
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !");
  
          let args = message.content.split(" ").slice(1);
  
          if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
          message.channel.bulkDelete(args[0]).then(() => {
              message.channel.send(`${args[0]} messages ont été supprimés !`);
          });
      }
  
      if(message.content.startsWith(prefix + "mute")) {
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
  
          if(message.mentions.users.size === 0) {
              return message.channel.send('Vous devez mentionner un utilisateur !');
          }
  
          var mute = message.guild.member(message.mentions.users.first());
          if(!mute) {
              return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
          }
  
          if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
          message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
              message.channel.send(`${mute.user.username} est mute !`);
          });
      }

  
      if(message.content.startsWith(prefix + "unmute")) {
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
  
          if(message.mentions.users.size === 0) {
              return message.channel.send('Vous devez mentionner un utilisateur !');
          }
  
          var mute = message.guild.member(message.mentions.users.first());
          if(!mute) {
              return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
          }
  
          if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
          message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
              message.channel.send(`${mute.user.username} n'est plus mute !`);
          });
      }

  });
