import axios from 'axios';
import { useState, useEffect } from 'react';
import {BrowserRouter,Link,Switch,Route,Router} from 'react-router-dom';
export default function Home2() {
    const [loginError, setloginError] = useState('')


    useEffect(() => {
        axios.get('http://165.22.218.254:4050/auth/login').then(rsp => {
            console.log(rsp);
     let token=""

     if (rsp) {
        if(rsp.data?.user == false){
          localStorage.removeItem('vlc_user_token');
          setloginError(loginError) = true;
    
        }

        if(rsp?.auth == true){
          localStorage.setItem('vlc_user_token',rsp.token);
          setloginError(loginError) = false;
          this.router.navigate(['/home']);
    
        }

      }
      else{
        localStorage.removeItem('vlc_user_token');
        setloginError(loginError) = true;
      }

   
           
        })



    }

        , [])

    
    return (

      <div>
        </div>

    )

            }
