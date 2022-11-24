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
	
	console.log(gameinfo)
  return (
    <div className="App">
	  <h1> making runes stats ez to get </h1>
	  <input type="text" onChange={e => setName(e.target.value)}></input>
	  <input type="number" min="1" max="20" onChange={e => setMore(e.currentTarget.value)}></input>
	  <button onClick={getinfo}> gettin info pog </button>
	  
	  <Runes state={gameinfo}/>

    </div>
  );
}

function Runes(props: any){
	console.log("testing props",props.state)
	let propsy = props.state
	let truerune 
	if(propsy[0]){
		 truerune=propsy.map((id: any) => <p key={id.info.gameDuration +1 }> {id.info.gameId}</p>) 
			
			
	}else truerune= <p> no states yet </p>


	return(
			<div className="runes">
				<p> this is where runes stats show</p>
				{truerune}
				<p> what if i wanna make a monkey dance here ? </p>
			</div>
		)
	
}

export default App;
