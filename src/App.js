import React,{useState,useCallback} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import Home from './components/home';
import Home2 from './components/home2';
import Item from './components/item';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


const accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODY4YjVlMzJjMTIxOWM5ODAyNmVmOSIsImlhdCI6MTYwMjczNzk1OX0.o71q_cwKzL7I7qa5XsvEZQWaDm6A6MJgoTaR-9Pu390'
const apiUrl='http://165.22.218.254:4050';

const authAxios=axios.create({
  baseURL:apiUrl,
  headers: {
    Authorization:'Bearer ${accessToken}',
  },
});

function App(){
  
  
  // axiosGlobalFn();
  //  {
  //   const self = this;
  //   var token = localStorage.getItem('vlc_user_token');
  //   let usersAuthStatus = this.checkUserAuth();
  //   apiUrl : 'http://165.22.218.254:4050'
   
  //   const configs = {
  //     url: `${apiUrl}/${url}`,
  //     method,
  //     data,
  //     params: id,
  //     headers: { 'x-access-token': token },
  //   };

  // const [categories,setUsers]=useState([]);
  // const [requestError,setRequestError]=useState()

  

const fetchData=useCallback(async () =>{
  try{
    const result=await authAxios.get('v1/secret/categories');
    // setUsers(result.data);
    console.log(result)
  }
  catch (error) {
    if (error.response.data.message === 'Invalid Token') {
      return error.response;
    } else {
      return error.response;
    }
  }
})  
   
  
  

    return (
      <BrowserRouter>
      <div> 
        <Switch>
          <Route exact path="/home"> 
          {/* <Home/> */}
          <Home2/>
          </Route>

          <Route  path="/Item"> 
           <Item/>
          </Route>


          </Switch>
       
        
      </div>
      </BrowserRouter>
    );
    
  
  }


export default App;
