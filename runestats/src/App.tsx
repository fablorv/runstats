import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import runesplace from './runesplace.json'
import flexs from './images'
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
			if(i >-1){
				propsy.shift()
				console.log(propsy, "from iu < iug")
				setTruerune(propsy.map((id: any) => <p key={id.info.gameDuration +1 }> {id.info.gameId}</p>) )
					Object.entries(propsy).forEach(([key, value], index) =>{
						console.log("this is something objkect",key ,value, index)
						for(let j =0; j < 10; j++){

							type ObjectKey = keyof typeof runesplace 
							
							let flex = value.info.participants[j].perks.statPerks.flex as ObjectKey
							let offense = value.info.participants[j].perks.statPerks.offense as ObjectKey
							let defense = value.info.participants[j].perks.statPerks.defense as ObjectKey

							let sumicon = value.info.participants[j].championId as ObjectKey
							let sumname = value.info.participants[j].summonerName 
							let perk00 = value.info.participants[j].perks.styles[0].selections[0].perk as ObjectKey
							let perk00var1 = value.info.participants[j].perks.styles[0].selections[0].var1
							let perk00var2 = value.info.participants[j].perks.styles[0].selections[0].var2
							let perk00var3 = value.info.participants[j].perks.styles[0].selections[0].var3

							let perk01 = value.info.participants[j].perks.styles[0].selections[1].perk as ObjectKey
							let perk01var1 = value.info.participants[j].perks.styles[0].selections[1].var1
							let perk01var2 = value.info.participants[j].perks.styles[0].selections[1].var2
							let perk01var3 = value.info.participants[j].perks.styles[0].selections[1].var3
							

							let perk02 = value.info.participants[j].perks.styles[0].selections[2].perk as ObjectKey
							let perk02var1 = value.info.participants[j].perks.styles[0].selections[2].var1
							let perk02var2 = value.info.participants[j].perks.styles[0].selections[2].var2
							let perk02var3 = value.info.participants[j].perks.styles[0].selections[2].var3

							let perk03 = value.info.participants[j].perks.styles[0].selections[3].perk as ObjectKey
							let perk03var1 = value.info.participants[j].perks.styles[0].selections[3].var1 
							let perk03var2 = value.info.participants[j].perks.styles[0].selections[3].var2
							let perk03var3 = value.info.participants[j].perks.styles[0].selections[3].var3

							let perk10 = value.info.participants[j].perks.styles[1].selections[0].perk as ObjectKey
							let perk10var1 = value.info.participants[j].perks.styles[1].selections[0].var1
							let perk10var2 = value.info.participants[j].perks.styles[1].selections[0].var2
							let perk10var3 = value.info.participants[j].perks.styles[1].selections[0].var3 						

							let perk11 = value.info.participants[j].perks.styles[1].selections[1].perk as ObjectKey
							let perk11var1 = value.info.participants[j].perks.styles[1].selections[1].var1 
							let perk11var2 = value.info.participants[j].perks.styles[1].selections[1].var2
							let perk11var3 = value.info.participants[j].perks.styles[1].selections[1].var3 

							let flexpath = flexs[0][flex]
							let iconpath = flexs[0][sumicon]
							let offensepath = flexs[0][offense]
							let defensepath = flexs[0][defense]
							let perk00path = flexs[0][perk00]
							let perk01path = flexs[0][perk01]
							let perk02path = flexs[0][perk02]
							let perk03path = flexs[0][perk03]
							let perk10path = flexs[0][perk10]
							let perk11path = flexs[0][perk11]
							let imgplayers = <> 
									<div className="games" key={value.info.gameDuration + j}>
										
										<div className="playerid"><img src={iconpath} alt="player icond" className="champspic" /> <p>{sumname}</p></div> <div className="perk0"><img key={value.info.gameCreation + 7} src={perk00path} alt="first perk i hope"  className="runespics" /> <p className="statsnum" key={perk00var1+4}>  {perk00var1} {perk00var2} {perk00var3}</p></div>
										 <div className="perk2"><img key={value.info.gameCreation + 8} src={perk01path} alt="this perk num 3" className="runespics"/> 	<p className="statsnum" key={perk01var1+5}>  {perk01var1} {perk01var2} {perk01var3}</p> </div>
										<div className="perk3"><img key={value.info.gameCreation + 9} src={perk02path} alt="this perk num 4" className="runespics"/> 	<p className="statsnum" key={perk02var1+6}>  {perk02var1} {perk02var2} {perk02var3}</p></div>
										<div className="perk4"><img key={value.info.gameCreation + 10} src={perk03path} alt="this perk num 5" className="runespics"/> 	<p className="statsnum" key={perk03var1+7}>  {perk03var1} {perk03var2} {perk03var3}</p></div>
										<div className="perk5"><img key={value.info.gameCreation + 11} src={perk10path} alt="this perk num 6" className="runespics"/> 	<p className="statsnum" key={perk10var1+8}>  {perk10var1} {perk10var2} {perk10var3}</p></div>
										<div className="perk6"><img key={value.info.gameCreation + 12} src={perk11path} alt="this perk num 7" className="runespics"/> 	<p className="statsnum" key={perk11var1+9}>  {perk11var1} {perk11var2} {perk11var3}</p></div>
										<div className="sperk"><img key={value.info.gameCreation + 13} src={flexpath} alt="flex" /> <img src={offensepath} alt="offense"/>  <img src={defensepath} alt="defense" /></div>
									</div>
								     </>
							playersinfo.push(imgplayers)
							setPlayersinf(playersinfo)
									
						}

							

						
						console.log(playersinf)
						type ObjectKey = keyof typeof runesplace 
						
						let flex = value.info.participants[i].perks.statPerks.flex as ObjectKey
						let offense = value.info.participants[i].perks.statPerks.offense as ObjectKey
						let defense = value.info.participants[i].perks.statPerks.defense as ObjectKey

						let perk00 = value.info.participants[i].perks.styles[0].selections[0].perk as ObjectKey
						let perk00var1 = value.info.participants[i].perks.styles[0].selections[0].var1
						let perk00var2 = value.info.participants[i].perks.styles[0].selections[0].var2
						let perk00var3 = value.info.participants[i].perks.styles[0].selections[0].var3

						let perk01 = value.info.participants[i].perks.styles[0].selections[1].perk as ObjectKey
						let perk01var1 = value.info.participants[i].perks.styles[0].selections[1].var1
						let perk01var2 = value.info.participants[i].perks.styles[0].selections[1].var2
						let perk01var3 = value.info.participants[i].perks.styles[0].selections[1].var3
						

						let perk02 = value.info.participants[i].perks.styles[0].selections[2].perk as ObjectKey
						let perk02var1 = value.info.participants[i].perks.styles[0].selections[2].var1
						let perk02var2 = value.info.participants[i].perks.styles[0].selections[2].var2
						let perk02var3 = value.info.participants[i].perks.styles[0].selections[2].var3

						let perk03 = value.info.participants[i].perks.styles[0].selections[3].perk as ObjectKey
						let perk03var1 = value.info.participants[i].perks.styles[0].selections[3].var1 
						let perk03var2 = value.info.participants[i].perks.styles[0].selections[3].var2
						let perk03var3 = value.info.participants[i].perks.styles[0].selections[3].var3

						let perk10 = value.info.participants[i].perks.styles[1].selections[0].perk as ObjectKey
						let perk10var1 = value.info.participants[i].perks.styles[1].selections[0].var1
						let perk10var2 = value.info.participants[i].perks.styles[1].selections[0].var2
						let perk10var3 = value.info.participants[i].perks.styles[1].selections[0].var3 						

						let perk11 = value.info.participants[i].perks.styles[1].selections[1].perk as ObjectKey
						let perk11var1 = value.info.participants[i].perks.styles[1].selections[1].var1 
						let perk11var2 = value.info.participants[i].perks.styles[1].selections[1].var2
						let perk11var3 = value.info.participants[i].perks.styles[1].selections[1].var3 
						

						let sumicon = value.info.participants[i].championId as ObjectKey
						let sumname = value.info.participants[i].summonerName 

						let iconpath = flexs[0][sumicon]
						let flexpath = flexs[0][flex]
						let offensepath = flexs[0][offense]
						let defensepath = flexs[0][defense]
						let perk00path = flexs[0][perk00]
						let perk01path = flexs[0][perk01]
						let perk02path = flexs[0][perk02]
						let perk03path = flexs[0][perk03]
						let perk10path = flexs[0][perk10]
						let perk11path = flexs[0][perk11]
						let imgsig = <> 
								<div className="firstp">
									<img src={iconpath} alt="player icond" className="champpic" /> <p className="playername">{sumname}</p> <img src={perk00path} alt="first perk i hope"  className="runespics" /> <p className="statsnum" key={perk00var1+11}>  {perk00var1} {perk00var2} {perk00var3}</p>
									 <img src={perk01path} alt="this perk num 3" className="runespics"/> 	<p className="statsnum" key={perk01var1+12}>  {perk01var1} {perk01var2} {perk01var3}</p>
									<img src={perk02path} alt="this perk num 4" className="runespics"/> 	<p className="statsnum" key={perk02var1+122}>  {perk02var1} {perk02var2} {perk02var3}</p>
									<img src={perk03path} alt="this perk num 5" className="runespics"/> 	<p className="statsnum" key={perk03var1+22}>  {perk03var1} {perk03var2} {perk03var3}</p>
									<img src={perk10path} alt="this perk num 6" className="runespics"/> 	<p className="statsnum" key={perk10var1+32}>  {perk10var1} {perk10var2} {perk10var3}</p>
									<img src={perk11path} alt="this perk num 7" className="runespics"/> 	<p className="statsnum" key={perk11var1+42}>  {perk11var1} {perk11var2} {perk11var3}</p>
 									<img src={flexpath} alt="flex" /> <img src={offensepath} alt="offense"/>  <img src={defensepath} alt="defense" />
									
								</div>
							     </>
						valuee.push(imgsig!)
						setTesto(valuee)
					//	setPlayerscond(append(false))
					})

				return {testo}	
			}else console.log("didnt work")


			
			
			
		}
		getinfing()
		
			
		console.log(playerscond,"this is hte function")

					
	},[propsy])

	useEffect(() => {
		async function sliceIntoChunks(arr, chunkSize) {
			    const res = [];
			    const cond = [];
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
