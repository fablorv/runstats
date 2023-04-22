
require('dotenv').config()
let express = require('express')
let cors = require('cors')
const axios = require('axios')
const fetchUrl = require("fetch").fetchUrl


let troll = [1,2,3,5]
if(true){
	console.log(troll)
}

let app = express()

app.use(cors())

const ap_key = process.env.myapi
console.log(process.env.myapi)
//get the name and how many games to look down from the user
app.get('/gameinfo' , async (req, res) =>{
	const playerName = req.query.username
	const moregames = req.query.state

	function getplayerpuuid(){
			return axios.get("https://euw1.api.riotgames.com" + "/lol/summoner/v4/summoners/by-name/"+ playerName +"?api_key=" + ap_key).then(response => {

				return (response.data.puuid)
			}).catch(err => err);
	}
	const puuid = await getplayerpuuid()
	console.log(puuid)
	function gamesids(){
		return axios.get("https://europe.api.riotgames.com"+"/lol/match/v5/matches/by-puuid/"+ puuid+ "/ids?start=0&count="+moregames +"&api_key="+ ap_key).then(response =>{
			return(response.data)
		}).catch(err => err);
	}
	const gameids = await gamesids()
	let users = []

	users.push(puuid)
	let promises = []
	for (let i = 0; i <gameids.length  ; i++){
		const matchid = gameids[i]
		const matchadata = await axios.get("https://europe.api.riotgames.com" +"/lol/match/v5/matches/"+matchid+"?api_key="+ ap_key).then(response =>response.data).catch(err => err)
		users.push(matchadata)
		
			
		
	}
				
	console.log(users,"thisis ids","this is from react", moregames, playerName)






	res.send(users)
})
app.listen(4000, function () {
	console.log("server start")
})
