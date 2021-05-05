import React ,{useEffect, useState} from 'react'
import axios from 'axios'
function Data9() {
    const [data , setData] = useState([])
    const getdata = async  () => {
        await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2018-19/en.1.json")
        .then((res)=> setData(res.data.matches))
        .catch((err)=>  console.log(err));
    }
    useEffect(()=> {
        getdata();
    },[])

    const carddata = (
        Object.values(data).map((key) =>
                <tr>
                    <td>{key.date}</td>
                    <td>{key.team1}</td>
                    <td>{key.team2}</td>
                    <td>{key.score.ft[0]} - {key.score.ft[1]} </td>
                    <td>{key.score.ft[0] === key.score.ft[1] ? <div>Match Drawn</div> : 
            key.score.ft[0] > key.score.ft[1] ? <div>{key.team1} wins </div>  :
            <div>{key.team2} wins </div>
            
            }</td>
                </tr> 
        )
    )
  

    return (
        <>
          {<>
            
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/>
        </>}  
        <div className =  "row justify-content-center" id ="2018-19">
        <table className = "col-md-12  text-center table table-bordered table-primary table-striped">
            <thead  className = "bg-success">
                <tr>
                    <th>Date</th>
                    <th>Team1</th>
                    <th>Team2</th>
                    <th>Score</th>
                    <th>Winner</th>
                </tr>
            </thead>
            <tbody className = "text-danger">
                {carddata}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Data9
