import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

	const [gameinfo , setGameinfo] = useState("")
	const [name , setName ] = useState("")
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
	const [truerune , setTruerune] = useState()
	const [perks , setPerks] = useState()
	let propsy = propo[0]


	useEffect(()=>{
		 async function getinfing(){

			console.log("testing props",propo)
			const i =  propsy[1].info.participants.findIndex((e:any) => e.puuid === propo[0][0])
			console.log(i)
			if(i >-1){
				propsy.shift()
				console.log(propsy, "from iu < iug")
				setTruerune(propsy.map((id: any) => <p key={id.info.gameDuration +1 }> {id.info.gameId}</p>) )
				setPerks(propsy.map((id: any) =><> <p key={id.info.gameDuration +2 }> 
					{id.info.participants[i].perks.statPerks.flex} {id.info.participants[i].perks.statPerks.offense}  {id.info.participants[i].perks.statPerks.defense} SPACEHERE FFS {id.info.participants[i].perks.styles[0].selections[0].perk} {id.info.participants[i].perks.styles[0].selections[0].var1} {id.info.participants[i].perks.styles[0].selections[0].var2} {id.info.participants[i].perks.styles[0].selections[0].var3} </p> 
				<p key={id.info.gameDuration +45 }> SPACEHERE FFS {id.info.participants[i].perks.styles[0].selections[1].perk} {id.info.participants[i].perks.styles[0].selections[1].var1} {id.info.participants[i].perks.styles[0].selections[1].var2} {id.info.participants[i].perks.styles[0].selections[1].var3}</p>
				<p key={id.info.gameDuration +44 }> SPACEHERE FFS {id.info.participants[i].perks.styles[0].selections[2].perk} {id.info.participants[i].perks.styles[0].selections[2].var1} {id.info.participants[i].perks.styles[0].selections[2].var2} {id.info.participants[i].perks.styles[0].selections[2].var3}</p>
				<p key={id.info.gameDuration +42 }> SPACEHERE FFS {id.info.participants[i].perks.styles[0].selections[3].perk} {id.info.participants[i].perks.styles[0].selections[3].var1} {id.info.participants[i].perks.styles[0].selections[3].var2} {id.info.participants[i].perks.styles[0].selections[3].var3}</p>
				<p key={id.info.gameDuration +41 }> SPACEHERE FFS {id.info.participants[i].perks.styles[1].selections[0].perk} {id.info.participants[i].perks.styles[1].selections[0].var1} {id.info.participants[i].perks.styles[1].selections[0].var2} {id.info.participants[i].perks.styles[1].selections[0].var3}</p>
				<p key={id.info.gameDuration +34 }> SPACEHERE FFS {id.info.participants[i].perks.styles[1].selections[1].perk} {id.info.participants[i].perks.styles[1].selections[1].var1} {id.info.participants[i].perks.styles[1].selections[1].var2} {id.info.participants[i].perks.styles[1].selections[1].var3}</p></>) )
				return {truerune , perks}	
			}else console.log("didnt work")

			console.log(getinfing(),"this is hte function")
		}
		getinfing()
					
	},[propsy])
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
