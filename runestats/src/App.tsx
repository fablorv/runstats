import React from 'react';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

	const [gameinfo , setGameinfo] = useState("")
	const [name , setName ] = useState("")
	const [number ,setNumber] = useState("")
	const [more , setMore] = useState('5')


	function getinfo(){
		axios.get("http://localhost:4000/gameinfo", {params: {username: name, state: more}}).then(function (response) {
			setGameinfo(response.data);
		}).catch(function (error) {
			console.log(error);
		})
	}
	let propo = [gameinfo, name]	
	console.log(gameinfo)
  return (
    <div className="App">
	  <h1> making runes stats ez to get </h1>
	  <input type="text" onChange={e => setName(e.target.value)}></input>
	  <input type="number" min="1" max="20" onChange={e => setMore(e.currentTarget.value)}></input>
	  <button onClick={getinfo}> gettin info pog </button>
	  
	  <Runes {...propo}/>

    </div>
  );
}

function Runes(propo: any){
	console.log("testing props",propo)
	let propsy = propo.gameinfo
	let truerune

	let perks
	if(propsy){
		let array = propsy[0].info.participants
		const i = propsy[0].info.participants.findIndex((e:any) => e.summonerName ==="9i_12Ju6CJLzHVZEggJOK5kOTMSQsWrnMbqIkahDJcf4rTEcScEkjIqlfXmPlOMtANSMHwCzyObZdQ")
		if(i >-1){
			 truerune=propsy.map((id: any) => <p key={id.info.gameDuration +1 }> {id.info.gameId}</p>) 
			perks = propsy.map((id: any) => <p key={id.info.gameDuration +2 }> {id.info.participants[i].perks.statPerks.flex} {id.info.participants[i].perks.statPerks.offense}  {id.info.participants[i].perks.statPerks.defense} </p>) 
		}else console.log("couldnt find the player")	
				
	}else truerune= <p> no states yet </p>


	return(
			<div className="runes">
				<p> this is where runes stats show</p>
				{truerune}
				{perks}
			</div>
		)
	
}

export default App;
