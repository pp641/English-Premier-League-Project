import React ,{useEffect, useState} from 'react'
import axios from 'axios'
function Data1(props) {
    const [data , setData] = useState([])
    const getdata = async  () => {
        await axios.get(props.url)
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
            
        </tr> ))
    

    return (
        <>
        <div className="row justify-content-center">
            
        <table className = " col-md-12  text-center table table-bordered table-primary table-striped">
            <thead>
            <tr>
                <th>Date</th>
                <th>Score</th>
                <th>Team1</th>
                <th>Team2</th>
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

export default Data1
