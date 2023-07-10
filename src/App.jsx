
import './App.css'
import Game from './Game.jsx'
import ShoppingList from './ShoppingList'
import AirBnB from './AirBnB'
import Clicker from './Clicker.jsx'
import Toggler from "./Toggler"
import EmojiClicker from './EmojiClicker'
import TargetGame from './TargetGame'
import Dice from './Dice'
import LuckyN from './LuckyN'
import Forms from './Forms.jsx'
import BetterSignUpForm from "./BetterSignUpForm"
import ShoppingListForm from './ShoppingListForm'
import Api from './Api'
import Mui from './Mui'
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
const items= [{id:1,item:"Milk", q:5, completed:false},{id:2, item:"potato", q:6, completed:true},{id:3, item:"Cereal", q:3, completed:true}]
export default function App() {
  return (
    // <Game v1="5" v2="5" v3="6" / >
    
    // <AirBnB p={properties}/>
    // <Clicker msg="Hello There" button="Please Click Me "/>
    // <Toggler/>
    // <EmojiClicker/>
    // <TargetGame numberOfPlayers={4} target={5}/>
    // <LuckyN numDice={2} goal={7}/>
    // <Forms/>
    // <BetterSignUpForm/>
    <div>
      {/* <ShoppingList /> */}
      {/* <Api/> */}
    <Mui/>
    
    </div>
    
  )
}


