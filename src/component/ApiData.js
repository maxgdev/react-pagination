import React from "react";
import "./ApiData.css";
import { useEffect, useState } from "react";


const ApiData = () => {

    const [data, setData] = useState([]);

    const ApiURL = "https://jsonplaceholder.typicode.com/posts";

    const loadApiData = () => {
        fetch(ApiURL, {
            method: "GET",
        })
        .then((res)=> res.json())
        .then((result)=> {
            if(result){
                setData(result);
            }
        })
        .catch((err)=> {
            console.log("Api Error: ", err)
        })
    }

    useEffect(()=> {
        loadApiData();
    }, []);

    return (
        <div className="container">
            <div className="info-design">
                <h2>List of Posts</h2>
                {/* <p>{JSON.stringify(data)}</p> */}
                {data.map((item, index)=> (
                    <>
                    <h6>Title: {item.title}</h6>
                    <p>Body: {item.body}</p>
                    <p>UserId: {item.userId}. Id: {item.id}</p>
                    </>
                ))}

            </div>
        </div>
    )
}
export default ApiData;