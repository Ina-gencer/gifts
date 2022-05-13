import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [gifts, setGifts] = useState(data);
  // console.log(data)
  const removeItem =(id)=> {
// console.log(id)
let newArray = gifts.filter(element => element.id !== id);
console.log(newArray)
setGifts(newArray)
}

  return (
   <div>
     <div className='container'>
        <h1>List of {gifts.length} gifts</h1>
     </div>
      {gifts.map((item => {
        const{id, gifty, image} = item;
        return(
          <div key={id}>

            <div className='container'>
              <h2>{id} - {gifty}</h2>
            </div>

            <div className='container'>
              <img src={image} alt="gifts" width="300px" />
            </div>
            <div className='container'>
              <button onClick={()=> removeItem(id)}> Remove</button>
            </div>

          </div>
        )
      }))}
      <div className='container'>
        <button onClick={ ()=>setGifts([]) } >DELETE ALL</button>
      </div>
   </div>
  );
}

export default App;
