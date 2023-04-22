import React from 'react';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

//import somerune from "../src/perk-images/styles/Precision/CutDown.png"

function App() {

	const [gameinfo , setGameinfo] = useState("")
	const [name , setName ] = useState("")
	const [more , setMore] = useState('5')
	const [searchclass , setSearchclass] = useState('searchbut')
	const [buttoncomp , setButtoncomp] = useState(['buttonstuff', 'h1text'])
	


	function getinfo(){
		axios.get("http://localhost:4000/gameinfo", {params: {username: name, state: more}}).then(function (response) {
			setGameinfo(response.data);
			setButtoncomp(['buttonstuff2', "h1text2"])
			setSearchclass("headerapart")
		}).catch(function (error) {
			console.log(error);
		})
	}
	console.log(gameinfo)
	
  return (
    <div className="App">
    	<div className={searchclass}>
		  <h1 className={buttoncomp[1]}> LEAGUE OF RUNES </h1>
		  <div className={buttoncomp[0]}>
			<div id="cover">
			    <div className="tb">
			      <div className="td"><input type="text" placeholder="Search" onChange={e => setName(e.target.value)}  /></div>
			      <div className="td" id="s-cover">
				<button  onClick={getinfo}>
				  <div id="s-circle"></div>
				  <span></span>
				</button>
			      </div>
			    </div>
			</div>
			  <input className="numinput" type="number" min="1" max="20" onChange={e => setMore(e.currentTarget.value)}></input>
		</div>
	</div>

    </div>
  );
}


export default App;
