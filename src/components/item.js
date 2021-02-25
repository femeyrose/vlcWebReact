import axios from 'axios';
import { useState, useEffect } from 'react';
import Solution from './solution'
import Description from './description';
export default function Item({ }) {
    const [cat, setCat] = useState([])
    const [solItem, setSolItem] = useState('')
    const [desc, setDesc] = useState('')
    const [product, setProduct] = useState([])
    const [desc2, setDesc2] = useState([])




    useEffect(() => {
        let y = localStorage.getItem('solId');
        console.log({ y })
        axios.get(`http://165.22.218.254:4050/v1/secret/solutions/${y}`).then(rsp => {
            console.log(rsp);
            console.log(rsp.data.info.name)
            console.log(rsp.data.info.category.name)
            setCat(rsp.data.info.category.name)
            setSolItem(rsp.data.info.name)
            setDesc(rsp.data.info.description)
            setProduct(rsp.data.info.products)


            // .short_desc
        })



    }
        , [])


    return (
        <div >

            <ul>
                <li>{cat}</li>
                <li>{solItem}</li>
            </ul>
            <h3>Select from a Choice of {solItem} Solutions Available at Ingram Micro Cyber Security</h3>
            <b> <h6>Description for {solItem} : </h6> </b>
            <p>{desc}</p>
            <img src="http://165.22.218.254:4050/temp/images/{{product.logo}}" alt="1"></img>

            <b><p>product description</p> </b>

            {product.map(function (item) {

                return (<p>{item.short_desc}</p>

                );
            })


            }

            {product.map(function (item) {

                return (<Description desc={item.desc}/>
                   
                );
            })

            }

        </div>




    )

}


