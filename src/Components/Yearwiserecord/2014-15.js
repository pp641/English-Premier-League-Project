import React ,{useEffect, useState} from 'react'
import axios from 'axios'
function Data5() {
    const [data , setData] = useState([])
    const getdata = async  () => {
        await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2014-15/en.1.json")
        .then((res)=> setData(res.data.rounds))
        .catch((err)=>  console.log(err));
    }
    useEffect(()=> {
        getdata();
    },[])

    const data3 =  Object.values(data).map((key)=> Object.values(key.matches).map((data) => <tr>
            <td>{data.date}</td>
            <td>{JSON.stringify(data.score.ft)}</td>
            <td>{data.team1}</td>
            <td>{data.team2}</td>
            <td>{data.score.ft[0] === data.score.ft[1] ? <div>Match Drawn</div> : 
            data.score.ft[0] > data.score.ft[1] ? <div>{data.team1} wins </div>  :
            <div>{data.team2} wins </div>
            
            }</td>
            
        </tr> ))
    

    return (
        <>
          {<>
            
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/>
        </>}  
        <div className="row justify-content-center" id ="2014-15">
            
        <table className = " col-md-12  text-center table table-bordered table-primary table-striped">
            <thead  className = "bg-success">
            <tr>
                <th>Date</th>
                <th>Score</th>
                <th>Team1</th>
                <th>Team2</th>
                <th>Winner</th>
            </tr>
            </thead>
            <tbody className="text-danger  ">
                {data3}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Data5
