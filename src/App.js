import React,{useState} from 'react';
import './App.css';

function App() {

  const [getData,setData] = useState({

  users: []

});


const getDataAPI = () => {

  fetch('https://api.github.com/users').then(res => res.json())
  .then(data => {

    setData({
 
      users : data,

    })

  }).catch(err => console.log(err))

}

const results = getData.users.map((per,index)=>{

return <li className="Li-style" key={index}>
  
<span>Username: {per.login}</span>
<span>Usertype: {per.type}</span>
<img src={per.avatar_url} height="100px" width="100px"/>
  
  </li>

});



  return (
    <div className="App">
      <button onClick={getDataAPI}>GET DATA</button>
      <h1>Get random users from GITHUB!!</h1>
      <ul>{results}</ul>
    </div>
  );
}

export default App;
