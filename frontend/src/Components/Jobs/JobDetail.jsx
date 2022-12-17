import React, { useState } from "react"
import { useEffect } from "react"
import {useParams} from "react-router-dom"
import jobData from "./jobData"

function JobDetail() {
    const [data, setData] = useState({})
    const {jobId} = useParams()
    useEffect(()=>{
        const thisProduct = jobData.find(prod => prod.id == jobId)
        setData(thisProduct)
    },[])
    return (
        <div>
            <h1>{data.title}</h1>
            <p>Price: ${data.rate}</p>
            <p>{data.exp}</p>
        </div>
    )
}

export default JobDetail