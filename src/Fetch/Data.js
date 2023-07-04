import axios from 'axios'
import React, {useEffect, useState} from 'react'
import http from './http'

const Data = () => {
    const [loading, setloading] = useState(false)
    const [err, setter] = useState(null)
    const [data, setdata] = useState([])
    
    useEffect(() => {

        try {
            setloading(true)
            http.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
                console.log(res);
                setdata(res.data);
                setloading(false)
            }).catch((err)=>{
                console.log(err);
                console.log("Server error");
                setter(err.message)
                setloading(false)
            })
            
        } catch (error) {
            console.log(error);
            console.log("This is my error");
            setter(error.message)
        }
      
    }, [])
    
  return (
    <>
    <h1>Fetched Data</h1>
    {err ? <h1 className='text-danger'>{err}</h1> : null}
    {loading ? <h1 className='text-warning'>Loading...</h1> : null}
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </>
  )
}

export default Data