import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const [faces,setFaces] = useState([]);
  const [target,setTarget] = useState(null);

  function select(value){
    let ids = [...faces];
    ids[value.id-1]={id:value.id,selected:!value.selected};
    setFaces(ids);
  }

  useEffect(()=>{
    setTarget((Math.floor(Math.random()*100)%21)+1);
    let array = [];
    for (let i = 0; i <21; i++) {
      array[i]={id:i+1,selected:false}
    }
    setFaces(array);
  },[])

  return (
    <div className="App">
      {target&&(
        <>
          <img src={require(`./assets/${target}.png`)} alt=""/>
          <h1>SEU PERSONAGEM</h1>
        </>
      )}
      <ul>
        {faces.map(value =>(
          <li key={value.id}>
            <div onClick={()=>select(value)}>
              <img src={require(`./assets/${value.id}.png`)} alt={value.id} className={value.selected?'selected':''}/>
            </div>       
          </li>
          
          
        ))}
      </ul>
      
    </div>
  );
}

export default App;
