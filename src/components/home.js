import React from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";



class Home extends React.Component {

    state = {
        categoriesArray: [],
        solution: [],
        solution2: [],
        solutionsArray: []


    }

   

    componentDidMount() {

        axios.get('http://165.22.218.254:4050/v1/secret/categories').then(rsp => {
            console.log(rsp);


            console.log("rsp", rsp)
            if (rsp.status === 200) {
                console.log("rsp.data.info", rsp.data.info)

                // this.setState({ categoriesArray:rsp.data.info })
                

                this.categoriesArray = rsp.data.info;
                console.log("all categories-> rsp.data.info", this.categoriesArray)

                this.categoriesArray = this.categoriesArray.filter(function (e) {
                    return e.status != "0";
                });

                console.log("categories with status not zero", this.categoriesArray)
                // console.log( this.setState({solutionsArray:this.categoriesArray}))
                this.solutionsArray = []; 
                   
                for (let i = 0; i < this.categoriesArray.length; i++) {
                    // this.categoryArray.map((obj)=> {return( this.solutionsArray.push(obj.solutions))})

                    
                    this.solutionsArray[i].push(this.categoriesArray[i].solutions);
                    // this.solutionsArray.push( this.categoriesArray.solutions)
                    // this.solutionsArray[i] = this.categoriesArray[i].solutions;
                    // this.solutionsArray[i] = this.solutionsArray[i].filter((e) => {
                    //     return e.status != "0"
                    // });
                }
                console.log("solutions array", this.solutionsArray)

                // console.log("solutions array with status not zero", this.solutionsArray)


            }
        })

    }


    render() {

        return (
            <div>
           
                <ul>
                    {this.categoriesArray.map(function (item) {
                        return <li key={item.name}>{item.name}</li>;
                    })}
                </ul>

            </div>
        );









    }

}

export default Home;




