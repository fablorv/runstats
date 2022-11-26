import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
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
	let propsy = propo[0]
	let truerune

	let perks

	useEffect(()=>{
		 async function getinfing(){

			console.log("testing props",propo)
			let array =await  propsy
			const i =await  propsy[1].info.participants.findIndex((e:any) => e.puuid === propo[0][0])
			console.log(i)
			if(false){
				let nopuuid = propsy.shift()
				console.log(propsy, "from iu < iug")
				 truerune= propsy.map((id: any) => <p key={id.info.gameDuration +1 }> {id.info.gameId}</p>) 
				perks = await propsy.map((id: any) => <p key={id.info.gameDuration +2 }> {id.info.participants[i].perks.statPerks.flex} {id.info.participants[i].perks.statPerks.offense}  {id.info.participants[i].perks.statPerks.defense} </p>) 
		
			}else truerune= <p> no states yet </p>
		}
		getinfing()
					
	},[propo])
	console.log("this should be true rune:", truerune)


	return(
			<div className="runes">
				<p> this is where runes stats show</p>
				{truerune}
				{perks}
			</div>
		)
	
}

export default App;
