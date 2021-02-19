import axios from 'axios';
import { useState, useEffect } from 'react';
import Solution from './solution'
export default function Home2() {
    const [categoriesArray, setCategories] = useState([])
    const [solution, setSolution] = useState([])
    const [solution2, setSolution2] = useState([])
    const [solutionsArray, setSolutions] = useState([])
    const [item, setItems] = useState('')
    const [sol, setSol] = useState([])


    //component did mount+component did update

    useEffect(() => {
        axios.get('http://165.22.218.254:4050/v1/secret/categories').then(rsp => {
            console.log(rsp);


            console.log("rsp", rsp)
            if (rsp.status === 200) {
                console.log("rsp.data.info", rsp.data.info)

                setCategories(rsp.data.info);
                console.log("all categories-> rsp.data.info", categoriesArray)

                // const filterEvenResults = () => setItems(items.filter(x => x % 2))

                const filterArray = () => setCategories(categoriesArray.filter(function (e) {
                    return e.status != "0";
                })
                )

                console.log("categories with status not zero", categoriesArray)
                let solutionsList = [];
                for (let i = 0; i < categoriesArray.length; i++) {

                    solutionsList.push(categoriesArray[i].solutions);
                    console.log(solutionsList[i])

                }
                setSolutions(solutionsList);

                console.log("solutions array", solutionsList)

                // console.log("solutions array with status not zero", this.solutionsArray)
            }
        })



    }

        , [])

    function fun(item) {
        // console.log("hello")
        setItems(item.description)
        setSol(item.solutions)

    }
    return (

        <div>

            <div className="container-fluid banner">
                <div class="container">
                    <h1>Ingram Micro Cyber Security Vendor Line Card</h1>
                </div>
            </div>


            <div className="conrainer-fluid searchnav">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 xs-marg-btm">
                    <h4>Select the Domain you need help with</h4>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="input-group">
                        <input type="text" class="form-control" id="" placeholder="Search" aria-describedby=""/>
                        <div className="input-group-prepend">
                            <button className="btnsearch input-group-text" id="inputGroupPrepend2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


            <ul>
                {categoriesArray.map(function (item) {

                    return (<li key={item.id}><button onClick={() => { fun(item) }}>{item.name} </button></li>);
                })
                }
            </ul>

            <p>{item}</p>


            <Solution solutions={sol} />


        </div>

    )
}