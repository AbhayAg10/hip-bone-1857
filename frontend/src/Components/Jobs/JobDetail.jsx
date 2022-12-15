import React from "react"
import {useParams} from "react-router-dom"
import jobData from "./jobData"

function JobDetail() {
    const {jobId} = useParams()
    const thisProduct = jobData.find(prod => prod.id === jobId)
    
    return (
        <div>
            <h1>{thisProduct.title}</h1>
            <p>Price: ${thisProduct.rate}</p>
            <p>{thisProduct.exp}</p>
        </div>
    )
}

export default JobDetail