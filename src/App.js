import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

const App = () => {
  const[count,setCount] = useState(0);
  const [person, setPerson] = useState({
    fullName : "Youssef Ahmed",
    bio : "I am 20 Years Old",
    imgSrc : "./pic.jpg",
    profession : "I am an Engineer",
    visible : true
  }) 
  const handleClick=()=> {
    setPerson(person.visible?{fullName : "",bio : "",imgSrc : "",profession : "" ,visible : false}:{...person,visible : true});
    setCount(0)
  }
   useEffect(()=>{
      const intervalID = setInterval(() => {
        setCount(c => c + 1)
      },1000);
      return () => clearInterval(intervalID)
   },[])

   return (
    <div className="App-header">
        <h1> {count}</h1>
        <img src={person.imgSrc}></img>
        <h1> {person.visible?`Hello ${person.fullName}`:""}</h1>
        <h2>{ person.visible? `${person.bio} and ${person.profession}`:""}</h2>
        <button style={{width:'4rem' , height:'3rem' }} onClick={handleClick}> {person.visible? "Hide":"Show"} </button>
    </div>
    
   )
  
}
export default App;

