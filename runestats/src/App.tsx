import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import runesplace from './runesplace.json'

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
	let propo = [gameinfo, name]	
	let imgsrc:string = runesplace[5001]
	
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
	  <Runes className="runes" {...propo}/>

    </div>
  );
}

function Runes(propo: any){
	const [testo, setTesto] = useState<any>()
	const [playersinf, setPlayersinf] = useState<any>()
	const [truerune, setTruerune] = useState<any>()
	const [valueresult, setValueresult] = useState<any>()
	const [playerscond, setPlayerscond] = useState<any>()
	const [condofcond, setCondofcond] = useState<any>()
	

	const [eachgame , setEachgame] = useState<any>()
	let result:any

	let propsy = propo[0]
	console.log(propo, "this is the props ig")	


	useEffect(()=>{
		 async function getinfing(){

			console.log("testing props",propo)
			let i =  propsy[1].info.participants.findIndex((e:any) => e.puuid === propo[0][0])
			const valuee = new Array<any>()
			let playersinfo = new Array<any>()
			const numbers = new Array<Number>()
			let imgplayers:any
			const res = []	
		}
		getinfing()
		console.log(playerscond,"this is hte function")

					
	},[propsy])

	useEffect(() => {
		async function sliceIntoChunks(arr, chunkSize) {
			    const res : string[] = [];
			    const cond : boolean = [];
			    for (let i = 0; i < arr.length; i += chunkSize) {
				const chunk =  arr.slice(i, i + chunkSize);
				res.push(chunk);
				cond.push(false)
			    }
			    setEachgame(res)
			    setPlayerscond(cond)
			    return {eachgame};
		}
		sliceIntoChunks(playersinf, 10)
	},[playersinf])
	
	useEffect(() => {

		function testingt(){
			if(playerscond){
				const nextCounters = playerscond.map((c, i) => {
				      if (i === condofcond) {
					// Increment the clicked counter
					return !c;
				      } else return c;
						})
				 setPlayerscond(nextCounters)
			}else console.log("not yet ")
		}
		
		testingt()
	},[condofcond])

		

		
	console.log("condition",playerscond, "each game ig", eachgame)
	return(
		<div className="runes">
					
				{ eachgame ? testo.map((paths:string, index:number) => <><div className="eachgame">{paths}{playerscond[index] ? <div className="detailplayers" >{eachgame[index]} </div>: <p style={{display:'none'}}></p>} <button  onClick={()=> setCondofcond(index) } className="allplayers">{playerscond[index] ? '-' : '+'}</button></div></>) :<p>Laoding. . . </p>}
				

		</div>
	)
	
}

export default App;
