import axios from 'axios';
import { useState, useEffect } from 'react';
import Item from './item';
// import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
export default function Solution({solutions}) {
    const [sol2, setSol2] = useState([])

    useEffect(() => {
        axios.get('http://165.22.218.254:4050/v1/secret/solutions').then(rsp => {
            console.log(rsp);
            

            })



    }
    

    , [])

    function findId(solution) {
        console.log(solution.solutionsid)
        localStorage.setItem('solId',solution.solutionsid);
        // router.transitionTo("/Item");
        // <Route path = "/item" component = {Item} />
        console.log(solution.name)
        setSol2(solution.name)
        // <Button component={Link} to="/item">
        // Link
        // </Button>
        

        

    }

    return(
        
        
        solutions.map(solution=>(<li key={solution.name}><div className="btn-group">
            
            <button href='item' onClick={() => { findId(solution) }} >{solution.name}</button> </div> </li> 
            
          ))

         
           
    )
    

}

// or

// export default function Solution(props) {

//     return(
//         props.solutions.map(solution=>(<p>{solution.name}</p>))
//     )

// }

