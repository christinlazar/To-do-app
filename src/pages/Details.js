
import React, { useEffect,useState } from 'react'
import axios from 'axios'
export default function Details() {

    const [data,setData] = useState([])

    useEffect(()=>{
     axios('data.json')
     .then((response=>{
        setData(response.data)
     }))
    })

  return (
    <div>
       {
        data.map((item)=>{
           return( <div>
                {item.name}
            </div>
           )
        })
       }
    </div>
  )
}
