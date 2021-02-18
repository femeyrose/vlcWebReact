

export default function Solution({solutions}) {

    return(
        solutions.map(solution=>(<button>{solution.name}</button>))
    )

}

// or

// export default function Solution(props) {

//     return(
//         props.solutions.map(solution=>(<p>{solution.name}</p>))
//     )

// }

